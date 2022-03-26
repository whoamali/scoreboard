import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import {
  TextField,
  TextFieldTitle,
  TextFieldDiscription,
  Button,
} from "./components";

export default function CreateBoard() {
  const { t } = useTranslation();

  return (
    <main>
      <form className="w-1/3 mx-auto">
        <div className="my-5">
          <TextFieldTitle content={t("app.createboard.title-label")} />
          <TextField
            name="title"
            type="text"
            placeholder={t("app.createboard.title-placeholder")}
          />
        </div>
        <div className="my-5">
          <TextFieldTitle content={t("app.createboard.discription-label")} />
          <TextFieldDiscription
            content={t("app.createboard.discription-discription")}
          />
          <TextField
            name="title"
            type="textarea"
            placeholder={t("app.createboard.discription-placeholder")}
          />
        </div>
        <div className="my-5">
          <TextFieldTitle
            content={t("app.createboard.number-of-players-label")}
          />
          <TextFieldDiscription
            content={t("app.createboard.number-of-players-discription")}
          />
          <TextField
            name="title"
            type="number"
            placeholder={t("app.createboard.number-of-players-placeholder")}
          />
        </div>
        <div className="my-5">
          <TextFieldTitle content={t("app.createboard.unit-label")} />
          <TextField
            name="title"
            type="text"
            placeholder={t("app.createboard.unit-placeholder")}
          />
        </div>
        <div className="mt-10 mb-20">
          <Button
            link={"/player"}
            onClick={e => {
              console.log(e);
            }}
          >
            <>
              {t("app.createboard.button-label")}{" "}
              <FontAwesomeIcon icon={faAngleRight} />
            </>
          </Button>
        </div>
      </form>
    </main>
  );
}
