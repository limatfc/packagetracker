import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Project files
import en from "../data/english.json";
import es from "../data/spanish.json";

const resources = {
  en,
  es,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
