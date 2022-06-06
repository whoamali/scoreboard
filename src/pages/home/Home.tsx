import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { Title, Typist, Button } from "./components";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="cflex cflex-col centered h-[100vh]">
      <section className="w-[311px]">
        <Title />
      </section>
      <section className="my-7">
        <Typist />
      </section>
      <section className="c-10 h-[55px]">
        <div className="cflex cflex-col cflex-row-lg centered">
          <Button
            link="/createboard"
            className="border-2 border-orange-600 rounded-lg bg-orange-600 text-white font-normal text-xl font-Fredoka mb-2 c-8 cm-lg-3 cm-xl-2 cm-xxxl-1 h-[55px]"
          >
            <>
              {t("app.create")} {t("app.board")}{" "}
              <FontAwesomeIcon icon={faAngleRight} />
            </>
          </Button>
          <Button
            link="/us"
            className="border-2 border-slate-900 rounded-lg text-slate-900 text-xl font-Fredoka mb-2 c-8 cm-lg-3 cm-xl-2 cm-xxxl-1 h-[55px] hover:bg-slate-900 hover:text-white transition"
          >
            {t("app.home.button.about-us")}
          </Button>
        </div>
      </section>
    </main>
  );
}
