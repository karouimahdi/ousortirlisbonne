import { Translations } from "..";

export const en = {
  welcome: "Welcome",
  goodbye: "Goodbye",
  test: (name: string) => `Hello, ${name}`,
  // Add more translations here
} satisfies Translations;
