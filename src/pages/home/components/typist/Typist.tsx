import { useTranslation } from "react-i18next";
import TextTypist from "react-text-typist";

export default function Typist() {
  const { t } = useTranslation();

  return (
    <TextTypist
      sentences={[
        t("app.home.typist.completely-free"),
        t("app.home.typist.fast-and-optimal"),
        t("app.home.typist.easy-to-use"),
      ]}
      cursorBlinkSpeed={500}
      cursorClassName={"text-orange-600"}
      typingSpeed={100}
      deletingSpeed={20}
      pauseTime={2000}
      className={"text-neutral-500 font-Fredoka text-3xl"}
    />
  );
}
