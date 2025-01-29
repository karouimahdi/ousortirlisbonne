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
import { EventCategory } from "./collections/EventCategory";
import { Event } from "./collections/Event";
import {BoatParty} from "./collections/BoatParty";
import ArrabidaBoatCollection from "./collections/BoatArabidaCascais";
import CoucherBoat from "./collections/Boats";
import { SessimbraActivity } from "./collections/SesimbraActivity";
import { Sport } from "./collections/Sport";
import { Bars } from "./collections/Bars";
import { CategoryBars } from "./collections/BarsCategory";
import { ClubCategory } from "./collections/ClubCategory";
import { Club } from "./collections/Club";
import { Decouvertes } from "./collections/Decouvertes";
import BoatJourney from "./collections/BoatJourney";
import newYearCruise from "./collections/NewYearCruise";
import RentBoat from "./collections/RentBoat";
import {BigBoatCollection} from "./collections/BigBoat"
import { SideCar } from "./collections/SideCar";
import { EventDay } from "./collections/EventDay";
import { Testimential } from "./collections/comments";
import RomanticCruise from "./collections/RomanticBoat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Media,
    EventDay,
    BoatJourney,
    newYearCruise,
    RentBoat,
    BlogCategory,
    Blog,
    CategoryRestaurants,
    Restaurants,
    Form,
    CoucherBoat,
    Submissions,
    EventCategory,
    Event,
    BoatParty,
    SessimbraActivity,
    ArrabidaBoatCollection,
    CategoryBars,
    Bars,
    Sport,
    ClubCategory,
    Club,
    RomanticCruise,
    Decouvertes,
    BigBoatCollection,
    SideCar,
    Testimential

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
