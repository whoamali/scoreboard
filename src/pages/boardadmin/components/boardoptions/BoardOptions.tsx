import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Field, Label } from "./components";
import { axiosIns } from "./../../../../utils";

interface IProps {
  adminKey: string;
}

interface Input {
  title: string;
  description: string;
  unit: string;
}

export default function BoardOptions({ adminKey }: IProps) {
  const [boardOption, setBoardOption] = React.useState<Input>();
  const { register, handleSubmit } = useForm<Input>();
  const [dataChanged, setDataChanged] = React.useState(false);
  const { t } = useTranslation();

  React.useEffect(() => {
    axiosIns
      .get("/boardoption", {
        params: {
          adminKey,
        },
      })
      .then(res => {
        setBoardOption(res.data);
      });
  }, []);

  React.useEffect(() => {
    console.log(boardOption);
  }, [boardOption]);

  const onSubmit = (data: Input) => console.log(data);

  return (
    <>
      <div className="flex flex-col mb-4">
        <Label>{t("app.createboard.title-label")}</Label>
        <Field
          defaultValue={boardOption?.title}
          type="text"
          register={register("title", {
            required: true,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === boardOption?.title) setDataChanged(false);
              else setDataChanged(true);
            },
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <Label>{t("app.createboard.description-placeholder")}</Label>
        <Field
          defaultValue={boardOption?.description}
          type="textarea"
          register={register("description", {
            required: true,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === boardOption?.description)
                setDataChanged(false);
              else setDataChanged(true);
            },
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <Label>{t("app.createboard.unit-label")}</Label>
        <Field
          defaultValue={boardOption?.unit}
          type="text"
          register={register("unit", {
            required: true,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === boardOption?.unit) setDataChanged(false);
              else setDataChanged(true);
            },
          })}
        />
      </div>
      <button
        className={`border-2 rounded-md font-normal text-xl px-2 py-1 font-Fredoka w-full capitalize ${
          dataChanged
            ? "border-orange-600 bg-orange-600 text-white"
            : "border-gray-300 bg-gray-300 text-slate-700"
        }`}
        disabled={!dataChanged}
        onClick={handleSubmit(onSubmit)}
      >
        {t("app.save")}
      </button>
    </>
  );
}
