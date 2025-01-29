// app/actions/form.ts
"use server";

import { getPayloadInstance } from "@/lib/payload";
import { revalidatePath } from "next/cache";
import { type Form, type FormData, type SubmissionResponse } from "./types";

export async function getForm(id: string){
  try {
    const payload = await getPayloadInstance();
    
    const form = await payload.findByID({
      collection: "forms",
      id: id,
      depth: 10,
    });

    if (!form) {
      return null;
    }

    return form as Form;
  } catch (error) {
    console.error("Error fetching form:", error);
    return null;
  }
}

export async function submitForm(
  formId: string, 
  formData: FormData
){
  try {
    const payload = await getPayloadInstance();
    
    const submittedData = Object.entries(formData).map(([fieldName, fieldValue]) => ({
      fieldName,
      fieldValue: String(fieldValue),
    }));

    const submission = await payload.create({
      collection: "submissions",
      data: {
        form: formId,
        submittedData,
        submittedAt: new Date().toISOString(),
      },
    });

    const form = await payload.findByID({
      collection: "forms",
      id: formId,
    });

    if (form.enableEmailNotifications && form.emailSubject && form.emailContent) {
      // Email notification logic here
    }

    return { success: true, data: submission };
  } catch (error) {
    console.error("Form submission error:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to submit form" 
    };
  }
}