import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/contactButton";
import { TranslationProvider } from "@/translations/provider/localeProvider";
import { cookies } from "next/headers";
import { Locale } from "@/translations";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieManager = await cookies();
  const locale = cookieManager.get("locale")?.value || "en";
  const acceptedLocales = ["en", "fr", "pt"];
  if (!acceptedLocales.includes(locale)) {
    cookieManager.set("locale", "en");
  }
  const initialLocale = locale as Locale;
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranslationProvider initialLocal={initialLocale}>
          <Navbar />
          {children}
          <ContactButton
            phoneNumber="1234567890"
            message="Bonjour, je souhaite plus d'informations"
          />
          {/* <Footer /> */}
        </TranslationProvider>
      </body>
    </html>
  );
}
