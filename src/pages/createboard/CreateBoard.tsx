import * as React from "react";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBoard } from "../../slice/boardSlice";
import { axiosIns } from "./../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "../../components";
import {
  TextField,
  TextFieldTitle,
  TextFieldDescription,
  Button,
  TextFieldError,
} from "./components";

interface Inputs {
  title: string;
  description: string | undefined;
  players_number: number;
  unit: string;
}

interface Error {
  show: boolean;
  type: "error" | "warning" | "info" | undefined;
  message: string | undefined;
}

const initialAlert: Error = {
  show: false,
  type: undefined,
  message: undefined,
};

export default function CreateBoard() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<Error>(initialAlert);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  React.useEffect(() => {
    setTimeout(() => {
      setAlert(initialAlert);
    }, 20000);
  }, [alert]);

  const onSubmit: SubmitHandler<Inputs> = async data => {
    setLoading(true);
    try {
      const response = await axiosIns.post("/create", {
        ...data,
      });

      if (response) {
        dispatch(
          createBoard({
            id: response.data.key,
            ...data,
          }),
        );
        setLoading(false);
        navigate(`/boardadmin/${response.data.key}`);
      }
    } catch (err) {
      setLoading(false);
      setAlert({
        show: true,
        message: `${err}. check your network connection or report to us`,
        type: "error",
      });
    }
  };

  return (
    <main>
      <Alert show={alert.show} message={alert.message} type={alert.type} />
      <div className="w-1/3 mx-auto">
        <div className="my-5">
          <TextFieldTitle content={t("app.createboard.title-label")} />
          <TextField
            type="text"
            register={register("title", { required: true })}
            placeholder={t("app.createboard.title-placeholder")}
          />
          {errors.title && (
            <TextFieldError
              content={t("app.createboard.title-required-error")}
            />
          )}
        </div>
        <div className="my-5">
          <TextFieldTitle content={t("app.createboard.description-label")} />
          <TextFieldDescription
            content={t("app.createboard.description-description")}
          />
          <TextField
            type="textarea"
            register={register("description")}
            placeholder={t("app.createboard.description-placeholder")}
          />
        </div>
        <div className="my-5">
          <TextFieldTitle
            content={t("app.createboard.number-of-players_number-label")}
          />
          <TextFieldDescription
            content={t("app.createboard.number-of-players_number-description")}
          />
          <TextField
            type="number"
            register={register("players_number", {
              required: true,
              min: 1,
              max: 1000,
            })}
            placeholder={t(
              "app.createboard.number-of-players_number-placeholder",
            )}
          />
        </div>
        <div className="my-5">
          <TextFieldTitle content={t("app.createboard.unit-label")} />
          <TextField
            type="text"
            register={register("unit")}
            placeholder={t("app.createboard.unit-placeholder")}
          />
        </div>
        <div className="mt-10 mb-20">
          <Button onClick={handleSubmit(onSubmit)}>
            <>
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                <>{t("app.createboard.button-label")} </>
              )}
            </>
          </Button>
        </div>
      </div>
    </main>
  );
}
