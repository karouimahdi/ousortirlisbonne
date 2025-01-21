"use client";
import { useTranslation } from "@/translations/provider/localeProvider";
import React from "react";

function page() {
  const { translations, setLocale , locale} = useTranslation();
  console.log(translations);
  return <div className="mt-40">{translations["test"]("khalil")}</div>;
}

export default page;
