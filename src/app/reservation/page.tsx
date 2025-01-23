"use client";

import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar, Map, User, Mail, Phone } from "lucide-react";
import StepperForm from '@/components/StepperForm';
import { motion } from 'framer-motion';
import { useTranslation } from "@/translations/provider/localeProvider"; // Import the translation hook
import HeroSection from '@/components/Hero';

const LisbonStayPage = () => {
  const { translations } = useTranslation(); // Use the translation hook

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-[#2a2765]">
     
      <HeroSection
  imageUrl="/lisb.jpg"
  title={translations["planYourStay"]}
  description={translations["discoverLisbon"]}
  buttonText=            {translations["getStarted"]}

  buttonLink="#"
  altText="Vue panoramique de Lisbonne"
/>
      {/* Section 2: Who Are We? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#2a2765]"
            variants={fadeInUp}
          >
            {translations["whoAreWe"]}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div className="text-[#2a2765]/80" variants={fadeIn}>
              <p className="text-xl mb-6">
                {translations["whoAreWeDescription1"]}
              </p>
              <p className="text-xl mb-6">
                {translations["whoAreWeDescription2"]}
              </p>
              <p className="text-xl mb-6">
                {translations["whoAreWeDescription3"]}
              </p>
            </motion.div>

            {/* Benefits Card */}
            <motion.div variants={fadeIn}>
              <Card className="bg-white shadow-lg rounded-xl border border-gray-200">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-[#37b7ab]">{translations["theBenefits"]}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-[#2a2765]/80">
                    <li>✅ {translations["benefit1"]}</li>
                    <li>✅ {translations["benefit2"]}</li>
                    <li>✅ {translations["benefit3"]}</li>
                    <li>✅ {translations["benefit4"]}</li>
                    <li>✅ {translations["benefit5"]}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: How Does It Work? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-[#2a2765]"
            variants={fadeInUp}
          >
            {translations["howDoesItWork"]}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Mail className="w-12 h-12 mx-auto text-[#37b7ab]" />
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-2xl font-bold mb-4">1. {translations["step1Title"]}</h3>
                  <p className="text-[#2a2765]/80">
                    {translations["step1Description"]}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Phone className="w-12 h-12 mx-auto text-[#37b7ab]" />
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-2xl font-bold mb-4">2. {translations["step2Title"]}</h3>
                  <p className="text-[#2a2765]/80">
                    {translations["step2Description"]}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Calendar className="w-12 h-12 mx-auto text-[#37b7ab]" />
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-2xl font-bold mb-4">3. {translations["step3Title"]}</h3>
                  <p className="text-[#2a2765]/80">
                    {translations["step3Description"]}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stepper Form Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <StepperForm />
      </motion.div>
    </div>
  );
};

export default LisbonStayPage;