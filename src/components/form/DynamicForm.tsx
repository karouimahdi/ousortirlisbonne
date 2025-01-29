"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { NonUndefined, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useSWR from 'swr';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { getForm, submitForm } from "./action";
import { type InputField, type InputGroup, type Form, type FormData } from "./types";
import { z } from 'zod';

const DynamicForm = ({
  id
}:{
  id: string;
}) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use SWR with the server action directly
  const { data: form, error, isLoading } = useSWR(
   `dynamic-form-${id}`,
    () => getForm(id)
  );

  // Handle loading and error states
  if (error) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardContent className="p-6">
          <div className="text-center text-red-500">Failed to load form. Please try again later.</div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading || !form) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#37b7ab]"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Create validation schema for current step
  const createValidationSchema = (step:NonUndefined <NonNullable<Form['steps']>>[]) => {
    const schemaMap: Record<string, z.ZodType> = {};
    
    step.step.inputs?.forEach((input) => {
      if (input.blockType === 'input') {
        const field = input as InputField;
        let fieldSchema = z.string();
        
        if (field.required) {
          fieldSchema = fieldSchema.min(1, 'This field is required');
        } else {
          fieldSchema = fieldSchema.optional();
        }
        
        if (field.type === 'email') {
          fieldSchema = z.string().email('Invalid email address');
        }
        
        schemaMap[field.name] = fieldSchema;
      } else if (input.blockType === 'inputGroup') {
        const group = input as InputGroup;
        group.inputs?.forEach(({ input: groupInput }) => {
          let fieldSchema = z.string();
          
          if (groupInput.required) {
            fieldSchema = fieldSchema.min(1, 'This field is required');
          } else {
            fieldSchema = fieldSchema.optional();
          }
          
          schemaMap[groupInput.name] = fieldSchema;
        });
      }
    });
    
    return z.object(schemaMap);
  };

  const currentSchema = form.steps?.[currentStep] 
    ? createValidationSchema(form.steps[currentStep])
    : z.object({});
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(currentSchema),
  });

  const renderField = (field: InputField) => {
    const { type, name, label, placeholder, required, options } = field;

    switch (type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'date':
        return (
          <div className="space-y-2">
            <Label htmlFor={name} className="text-[#2a2765]">{label}</Label>
            <Input
              type={type}
              id={name}
              placeholder={placeholder || undefined}
              {...register(name)}
              className="w-full rounded-full border-[#2a2765] focus:ring-[#37b7ab]"
            />
            {errors[name] && (
              <p className="text-[#ea3e4e] text-sm mt-1">
                {errors[name]?.message}
              </p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div className="space-y-2">
            <Label htmlFor={name} className="text-[#2a2765]">{label}</Label>
            <Textarea
              id={name}
              placeholder={placeholder || undefined}
              {...register(name)}
              className="rounded-2xl border-[#2a2765] focus:ring-[#37b7ab]"
            />
            {errors[name] && (
              <p className="text-[#ea3e4e] text-sm mt-1">
                {errors[name]?.message}
              </p>
            )}
          </div>
        );

      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={name}
              onCheckedChange={(checked) => setValue(name, checked)}
              className="border-[#2a2765] data-[state=checked]:bg-[#37b7ab]"
            />
            <Label htmlFor={name} className="text-[#2a2765]">{label}</Label>
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            <Label className="text-[#2a2765]">{label}</Label>
            <RadioGroup
              onValueChange={(value) => setValue(name, value)}
              className="space-y-2"
            >
              {options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={${name}-${option.value}}
                    className="border-[#2a2765] text-[#37b7ab]"
                  />
                  <Label htmlFor={${name}-${option.value}} className="text-[#2a2765]">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 'select':
        return (
          <div className="space-y-2">
            <Label htmlFor={name} className="text-[#2a2765]">{label}</Label>
            <Select onValueChange={(value) => setValue(name, value)}>
              <SelectTrigger className="w-full rounded-full border-[#2a2765]">
                <SelectValue placeholder={placeholder || 'Select an option'} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="cursor-pointer hover:bg-[#37b7ab]/10"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      default:
        return null;
    }
  };

  const renderInputGroup = (inputGroup: InputGroup) => {
    return (
      <div className="space-y-4">
        {inputGroup.inputs?.map((input, index) => (
          <div key={index} className="space-y-4">
            {renderField(input.input)}
          </div>
        ))}
      </div>
    );
  };

  const renderInputs = (inputs: (InputField | InputGroup)[] | null | undefined) => {
    if (!inputs) return null;
    
    return inputs.map((input, index) => (
      <div key={index} className="space-y-4">
        {input.blockType === 'input' && renderField(input as InputField)}
        {input.blockType === 'inputGroup' && renderInputGroup(input as InputGroup)}
      </div>
    ));
  };

  const onSubmit = async (data: FormData) => {
    if (currentStep < (form.steps?.length ?? 0) - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitForm(data);
      
      if (result.success) {
        toast.success("Form submitted successfully!");
        router.push(/forms/success);
      } else {
        toast.error(result.error || "Failed to submit form");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showStepIndicator = form.steps && form.steps.length > 1;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#2a2765]">
          {form.title}
        </CardTitle>
        {showStepIndicator && (
          <div className="flex items-center justify-center space-x-2 mt-4">
            {form.steps?.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-[#37b7ab]'
                    : index < currentStep
                    ? 'bg-[#2a2765]'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        )}
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          {form.steps && renderInputs(form.steps[currentStep].step.inputs)}
        </CardContent>
        <CardFooter className="flex justify-between">
          {currentStep > 0 && (
            <Button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              variant="outline"
              className="rounded-full border-[#2a2765] text-[#2a2765] hover:bg-[#2a2765] hover:text-white transition-colors"
              disabled={isSubmitting}
            >
              Previous
            </Button>
          )}
          <Button
            type="submit"
            className="rounded-full bg-[#37b7ab] text-white hover:bg-[#2a2765] ml-auto transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : currentStep === (form.steps?.length ?? 0) - 1 ? 'Submit' : 'Next'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default DynamicForm