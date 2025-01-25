import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Media } from "./collections/Media";
import { Blog } from "./collections/Blog";
import { BlogCategory } from "./collections/BlogCategory";
import { Form, Submissions } from "./collections/Form";
import { CategoryRestaurants } from "./collections/CategoryRestaurants";
import { Restaurants } from "./collections/Restaurants";
import { fileURLToPath } from "url";
import path from "path";
import { en } from "@payloadcms/translations/languages/en";
import { fr } from "@payloadcms/translations/languages/fr";
import { pt } from "@payloadcms/translations/languages/pt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Media,
    BlogCategory,
    Blog,
    CategoryRestaurants,
    Restaurants,
    Form,
    Submissions,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "generated-types.ts"),
  },

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  localization: {
    locales: ["en", "fr", "pt"],
    defaultLocale: "en",
  },
  i18n: {
    fallbackLanguage: "fr", // default
    supportedLanguages: { en, fr, pt },
  },
});
