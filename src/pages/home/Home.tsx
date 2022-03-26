import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { Title, Typist, Button } from "./components";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="w-full h-[100vh] flex flex-col items-center justify-center">
      <section className="w-[311px]">
        <Title />
      </section>
      <section className="my-7">
        <Typist />
      </section>
      <section className="flex flex-row items-center justify-between w-[510px] h-[55px]">
        <Button
          link="/createboard"
          className="border-2 border-orange-600 rounded-lg bg-orange-600 text-white font-normal text-xl font-Fredoka w-[240px] h-full"
        >
          <>
            {t("app.create")} {t("app.board")}{" "}
            <FontAwesomeIcon icon={faAngleRight} />
          </>
        </Button>
        <Button
          link="/us"
          className="border-2 border-slate-900 rounded-lg text-slate-900 text-xl font-Fredoka w-[240px] h-full hover:bg-slate-900 hover:text-white transition"
        >
          {t("app.home.button.about-us")}
        </Button>
      </section>
    </main>
  );
}
