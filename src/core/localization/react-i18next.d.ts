import "react-i18next";
import type { ResourcesType } from "./localization";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: ResourcesType;
  }
}
