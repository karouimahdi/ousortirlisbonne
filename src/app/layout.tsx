import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/contactButton";
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
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <ContactButton 
          phoneNumber="1234567890"
          message="Bonjour, je souhaite plus d'informations"
        />
        <Footer/> </body>
    </html>
  );
}
