import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { createBoard } from '../../slice/boardSlice'
import {
  TextField,
  TextFieldTitle,
  TextFieldDiscription,
  Button,
  TextFieldError,
} from "./components";

type Inputs = {
  title: string;
  discription: string | undefined;
  players: number;
  unit: string;
};

export default function CreateBoard() {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log("data => ", data);
    dispatch(createBoard(data))
    navigate("/player");
  };

  return (
    <main>
      <form className="w-1/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
          <TextFieldTitle content={t("app.createboard.title-label")} />
          <TextField
            type="text"
            register={register("title", { required: true })}
            placeholder={t("app.createboard.title-placeholder")}
          />
          {errors.title && (
            <TextFieldError content={t("app.createboard.title-required-error")} />
          )}
        </div>
        <div className="my-5">
          <TextFieldTitle content={t("app.createboard.discription-label")} />
          <TextFieldDiscription
            content={t("app.createboard.discription-discription")}
          />
          <TextField
            type="textarea"
            register={register("discription")}
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
            type="number"
            register={register("players", {
              required: true,
              min: 1,
              max: 1000,
            })}
            placeholder={t("app.createboard.number-of-players-placeholder")}
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
          <Button
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
