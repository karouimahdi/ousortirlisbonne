import payloadConfig from "@/payload.config";
import { Locale } from "@/translations";
import { cookies } from "next/headers";
import { getPayload } from "payload";

export async function getPayloadInstance() {
  const payload = await getPayload({
    config: await payloadConfig,
  });
  return payload;
}

export async function getLocale() {
  const cookieManager = await cookies();
  const locale = cookieManager.get("locale")?.value || "en";
  const acceptedLocales = ["en", "fr", "pt"];
  if (!acceptedLocales.includes(locale)) {
    cookieManager.set("locale", "en");
  }
  return locale as Locale;
}
