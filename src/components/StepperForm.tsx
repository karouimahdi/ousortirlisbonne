"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, AlertCircle, Smile, Calendar, Users, User, Mail, Phone, Globe, Gift } from 'lucide-react';
import { useTranslation } from "@/translations/provider/localeProvider"; // Import the translation hook

const StepperForm = () => {
  const { translations, setLocale, locale } = useTranslation(); // Use the translation hook
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    arrivalDate: "",
    departureDate: "",
    numberOfPeople: "",
    groupComposition: "",
    hasChildren: "",
    childrenAges: [] as string[],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    language: "",
    preferences: "",
    acceptPrivacyPolicy: false,
    acceptNewsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleChildrenAgesChange = (value: string) => {
    setFormData((prev) => {
      const updatedAges = prev.childrenAges.includes(value)
        ? prev.childrenAges.filter((age) => age !== value)
        : [...prev.childrenAges, value];
      return { ...prev, childrenAges: updatedAges };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(translations["formSubmitted"]); // Translated success message
  };

  const isStep1Valid = () => {
    return (
      formData.arrivalDate &&
      formData.departureDate &&
      formData.numberOfPeople &&
      formData.groupComposition &&
      formData.hasChildren
    );
  };

  const isStep2Valid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.language &&
      formData.acceptPrivacyPolicy
    );
  };
  const ageTranslations = {
    "0-2": "age0_2",
    "2-10": "age2_10",
    "10-16": "age10_16",
    "16+": "age16Plus",
  } as const;
  
  type AgeKey = keyof typeof ageTranslations;
  
  const getAgeTranslation = (age: AgeKey) => {
    const key = ageTranslations[age];
    return translations[key];
  };
  const steps = [
    { number: 1, title: translations["tripDetails"], icon: <Calendar className="w-5 h-5" /> },
    { number: 2, title: translations["personalInfo"], icon: <User className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">
              {translations["contactUs"]}
            </h1>
            <p className="text-xl text-gray-600 mt-2 font-light">
              {translations["makeLifeAnEvent"]}
            </p>
          </div>

          {/* Enhanced Stepper Indicator */}
          <div className="mb-12">
            <div className="flex justify-center items-center relative">
              {/* Progress Line */}
              <div className="absolute h-1.5 bg-gray-200 w-full max-w-md rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-[#37b7ab] to-[#2a2765] transition-all duration-500 rounded-full"
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>
              
              {/* Step Circles */}
              <div className="relative flex justify-between w-full max-w-md">
                {steps.map((s) => (
                  <div key={s.number} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        step >= s.number
                          ? 'bg-gradient-to-r from-[#37b7ab] to-[#2a2765] text-white shadow-lg'
                          : 'bg-gray-200 text-gray-500 shadow-sm'
                      }`}
                    >
                      {step > s.number ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        s.icon
                      )}
                    </div>
                    <span className={`mt-2 font-medium ${
                      step >= s.number ? 'text-[#2a2765]' : 'text-gray-500'
                    }`}>
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Content with Enhanced Styling */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Inputs */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#2a2765] font-medium mb-2 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#37b7ab]" />
                        {translations["arrivalDate"]} *
                      </label>
                      <Input
                        type="date"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2a2765] font-medium mb-2 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#37b7ab]" />
                        {translations["departureDate"]} *
                      </label>
                      <Input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Group Details */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#2a2765] font-medium mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#37b7ab]" />
                        {translations["numberOfPeople"]} *
                      </label>
                      <Input
                        type="number"
                        name="numberOfPeople"
                        value={formData.numberOfPeople}
                        onChange={handleChange}
                        required
                        min="1"
                        className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-[#2a2765] font-medium mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#37b7ab]" />
                        {translations["groupComposition"]} *
                      </label>
                      <Select
                        name="groupComposition"
                        value={formData.groupComposition}
                        onValueChange={(value) => setFormData({ ...formData, groupComposition: value })}
                      >
                        <SelectTrigger className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent">
                          <SelectValue placeholder={translations["selectGroupType"]} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Single">{translations["single"]}</SelectItem>
                          <SelectItem value="Couple">{translations["couple"]}</SelectItem>
                          <SelectItem value="Family">{translations["family"]}</SelectItem>
                          <SelectItem value="Friends">{translations["friendsGroup"]}</SelectItem>
                          <SelectItem value="Team Building">{translations["teamBuilding"]}</SelectItem>
                          <SelectItem value="Other">{translations["other"]}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Children Section */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-[#2a2765] mb-4 flex items-center gap-2">
                    <Smile className="w-5 h-5 text-[#37b7ab]" />
                    {translations["childrenInformation"]}
                  </h3>
                  <div className="space-y-4">
                    <Select
                      name="hasChildren"
                      value={formData.hasChildren}
                      onValueChange={(value) => setFormData({ ...formData, hasChildren: value })}
                    >
                      <SelectTrigger className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent">
                        <SelectValue placeholder={translations["doYouHaveChildren"]} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">{translations["yes"]}</SelectItem>
                        <SelectItem value="No">{translations["no"]}</SelectItem>
                      </SelectContent>
                    </Select>

                    {formData.hasChildren === "Yes" && (
                      <div className="grid grid-cols-2 gap-4 mt-4">
                       {["0-2", "2-10", "10-16", "16+"].map((age) => (
  <div key={age} className="flex items-center space-x-2 bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
    <Checkbox
      checked={formData.childrenAges.includes(age)}
      onCheckedChange={() => handleChildrenAgesChange(age)}
      className="data-[state=checked]:bg-[#37b7ab] data-[state=checked]:border-[#37b7ab]"
    />
    <label className="text-sm text-gray-700">
      {getAgeTranslation(age as AgeKey)}
    </label>
  </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                {/* Personal Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2a2765] font-medium mb-2 items-center gap-2">
                      <User className="w-5 h-5 text-[#37b7ab]" />
                      {translations["firstName"]} *
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2a2765] font-medium mb-2 items-center gap-2">
                      <User className="w-5 h-5 text-[#37b7ab]" />
                      {translations["lastName"]} *
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2a2765] font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#37b7ab]" />
                      {translations["emailAddress"]} *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2a2765] font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#37b7ab]" />
                      {translations["phoneNumber"]} *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div>
                    <label className="block text-[#2a2765] font-medium mb-2 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-[#37b7ab]" />
                      {translations["preferredLanguage"]} *
                    </label>
                    <Input
                      type="text"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2a2765] font-medium mb-2 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-[#37b7ab]" />
                      {translations["specialRequests"]}
                    </label>
                    <Input
                      type="text"
                      name="preferences"
                      value={formData.preferences}
                      onChange={handleChange}
                      className="transition-all duration-300 hover:border-[#37b7ab] focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                      placeholder={translations["specialRequestsPlaceholder"]}
                    />
                  </div>
                </div>

                {/* Agreements Section */}
                <div className="space-y-4 bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.acceptPrivacyPolicy}
                      onCheckedChange={(checked) => handleCheckboxChange("acceptPrivacyPolicy", checked as boolean)}
                      className="data-[state=checked]:bg-[#37b7ab] data-[state=checked]:border-[#37b7ab]"
                    />
                    <label className="text-sm text-gray-700">
                      {translations["acceptPrivacyPolicy"]} *
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.acceptNewsletter}
                      onCheckedChange={(checked) => handleCheckboxChange("acceptNewsletter", checked as boolean)}
                      className="data-[state=checked]:bg-[#37b7ab] data-[state=checked]:border-[#37b7ab]"
                    />
                    <label className="text-sm text-gray-700">
                      {translations["subscribeNewsletter"]}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-gray-200">
              {step === 2 && (
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {translations["back"]}
                </Button>
              )}
              <Button
                type={step === 2 ? "submit" : "button"}
                onClick={() => step === 1 && setStep(2)}
                disabled={step === 1 ? !isStep1Valid() : !isStep2Valid()}
                className="ml-auto bg-gradient-to-r from-[#37b7ab] to-[#2a2765] text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {step === 2 ? translations["submit"] : translations["next"]}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepperForm;