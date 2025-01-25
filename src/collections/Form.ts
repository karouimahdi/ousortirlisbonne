import type { CollectionConfig, Field } from "payload";

// Define the input field block
const inputField: Field = {
  name: "input",
  type: "group",
  fields: [
    {
      name: "type",
      type: "select",
      options: [
        { label: "Text", value: "text" },
        { label: "Email", value: "email" },
        { label: "Password", value: "password" },
        { label: "Number", value: "number" },
        { label: "Date", value: "date" },
        { label: "Checkbox", value: "checkbox" },
        { label: "Radio", value: "radio" },
        { label: "Select", value: "select" },
        { label: "Textarea", value: "textarea" },
      ],
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "placeholder",
      type: "text",
    },
    {
      name: "value",
      type: "text",
    },
    {
      name: "required",
      type: "checkbox",
    },
    {
      name: "options",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
      admin: {
        condition: (data) => data.type === "select" || data.type === "radio",
      },
    },
  ],
};

// Define the input group block
const inputGroup: Field = {
  name: "inputGroup",
  type: "group",
  fields: [
    {
      name: "inputs",
      type: "array",
      fields: [
        {
          name: "input",
          type: "group",
          fields: inputField.fields,
        },
      ],
    },
  ],
};

// Define the step block
const step: Field = {
  name: "step",
  type: "group",
  fields: [
    {
      name: "stepName",
      type: "text",
      required: true,
      label: "Step Name",
    },
    {
      name: "inputs",
      type: "blocks",
      blocks: [
        {
          slug: "input",
          fields: inputField.fields,
        },
        {
          slug: "inputGroup",
          fields: inputGroup.fields,
        },
      ],
    },
  ],
};

export const Form: CollectionConfig = {
  slug: "forms",
  labels: {
    singular: "Form",
    plural: "Forms",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "steps",
      type: "array",
      label: "Form Steps",
      fields: [
        {
          name: "step",
          type: "group",
          fields: step.fields,
        },
      ],
    },
    {
      name: "enableEmailNotifications",
      type: "checkbox",
      label: "Enable Email Notifications",
    },
    {
      name: "emailSubject",
      type: "text",
      label: "Email Subject",
      admin: {
        condition: (data, siblingData, { user }) => {
          if (data.enableEmailNotifications) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    {
      name: "emailContent",
      type: "textarea",
      label: "Email Content",
      admin: {
        condition: (data, siblingData, { user }) => {
          if (data.enableEmailNotifications) {
            return true;
          } else {
            return false;
          }
        },
        description: "Use {{fieldName}} to insert form field values.",
      },
    },
  ],
};

// Define the Submissions collection
export const Submissions: CollectionConfig = {
  slug: "submissions",
  fields: [
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
    {
      name: "submittedData",
      type: "array",
      fields: [
        {
          name: "fieldName",
          type: "text",
          required: true,
        },
        {
          name: "fieldValue",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "submittedAt",
      type: "date",
      defaultValue: () => new Date(),
    },
  ],
};
