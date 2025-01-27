import ContactButton from "@/components/contactButton";
import Navbar from "@/components/Navbar";
import { TranslationProvider } from "@/translations/provider/localeProvider";
import React from "react";
import { cookies } from "next/headers";
import { Locale } from "@/translations";
import "../globals.css";
import Footer from "@/components/Footer";

async function layout({ children }: { children: React.ReactNode }) {
  const cookieManager = await cookies();
  const locale = cookieManager.get("locale")?.value || "en";
  const acceptedLocales = ["en", "fr", "pt"];
  if (!acceptedLocales.includes(locale)) {
    cookieManager.set("locale", "en");
  }
  const initialLocale = locale as Locale;
  return (
    <html lang="en">
      <body>
        <TranslationProvider initialLocal={initialLocale}>
          <Navbar />
        <main className="min-h-screen"> {children}</main> 
          <ContactButton
            phoneNumber="1234567890"
            message="Bonjour, je souhaite plus d'informations"
          />
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}

export default layout;
