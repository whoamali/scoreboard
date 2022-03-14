import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fa from "./fa/messages";
import en from "./en/messages";

i18n.use(initReactI18next).init({
  resources: { en, fa },
  lng: "en",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

// i18next global service formatter
i18n.services.formatter!.add("unitless", (value: string, lng, _options) => {
  if (lng === "fa") return value.replaceAll("٬", "");
  return value;
});

export type ResourcesType = typeof fa;
