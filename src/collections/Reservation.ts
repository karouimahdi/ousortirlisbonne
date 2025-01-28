import { CollectionConfig } from 'payload';

const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions', // The URL-friendly name for the collection
  fields: [
    {
      name: 'arrivalDate',
      type: 'date',
      label: 'Arrival Date',
      required: true,
    },
    {
      name: 'departureDate',
      type: 'date',
      label: 'Departure Date',
      required: true,
    },
    {
      name: 'numberOfPeople',
      type: 'number',
      label: 'Number of People',
      required: true,
    },
    {
      name: 'groupComposition',
      type: 'select',
      label: 'Group Composition',
      options: ['Single', 'Couple', 'Family', 'Friends', 'Team Building', 'Other'],
      required: true,
    },
    {
      name: 'hasChildren',
      type: 'select',
      label: 'Has Children',
      options: ['Yes', 'No'],
      required: true,
    },
    {
      name: 'childrenAges',
      type: 'array',
      label: 'Children Ages',
      fields: [
        {
          name: 'age',
          type: 'text',
          label: 'Age Group',
        },
      ],
    },
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      required: true,
    },
    {
      name: 'language',
      type: 'text',
      label: 'Preferred Language',
      required: true,
    },
    {
      name: 'preferences',
      type: 'text',
      label: 'Special Requests',
    },
    {
      name: 'acceptPrivacyPolicy',
      type: 'checkbox',
      label: 'Accept Privacy Policy',
      required: true,
    },
    {
      name: 'acceptNewsletter',
      type: 'checkbox',
      label: 'Subscribe to Newsletter',
    },
  ],
};

export default FormSubmissions;