import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();

  return (
    <p className="text-black font-semibold font-Fredoka text-6xl capitalize">
      {t("app.home.title.online")} {t("app.home.title.free")}{" "}
      <span className="font-light text-slate-900">{t("app.score")}</span>
      <span className="text-orange-600">{t("app.board")}</span>
    </p>
  );
}
