import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import arm from "./arm.json";
import rus from "./rus.json";

const storedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    arm: { translation: arm },
    rus: { translation: rus }
  },
  lng: storedLanguage, // Set the language to the one stored in localStorage
  fallbackLng: "en", // if the language is not available, use English
  interpolation: {
    escapeValue: false // not needed for React as it escapes by default
  }
});

export default i18n;
