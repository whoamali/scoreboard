import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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
  const [boardOption, setBoardOption] = React.useState<Input>({
    title: "",
    description: "",
    unit: "",
  });
  const { register, handleSubmit, watch } = useForm<Input>();
  const [dataChanged, setDataChanged] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();

  React.useEffect(() => {
    axiosIns.get(`/admin/get/board_options/${adminKey}`).then(res => {
      setBoardOption(res.data.data);
    });
  }, []);

  const onSubmit = (data: Input) => {
    setLoading(true);
    axiosIns
      .post("/admin/post/board_options", {
        ...{
          title: data.title === "" ? boardOption.title : data.title,
          description:
            data.description === ""
              ? boardOption.description
              : data.description,
          unit: data.unit === "" ? boardOption.unit : data.unit,
        },
        admin_key: adminKey,
      })
      .then(res => {
        if (res.data.success) {
          setBoardOption(preBoardOption => {
            return {
              title: data.title === "" ? preBoardOption.title : data.title,
              description:
                data.description === ""
                  ? preBoardOption.description
                  : data.description,
              unit: data.unit === "" ? preBoardOption.unit : data.unit,
            };
          });
          setDataChanged(false);
        }
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex flex-col mb-4">
        <Label>{t("app.createboard.title-label")}</Label>
        <Field
          defaultValue={boardOption.title}
          type="text"
          register={register("title", {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === boardOption.title || e.target.value === "")
                setDataChanged(false);
              else setDataChanged(true);
            },
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <Label>{t("app.createboard.description-placeholder")}</Label>
        <Field
          defaultValue={boardOption.description}
          type="textarea"
          register={register("description", {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              if (
                e.target.value === boardOption.description ||
                e.target.value === ""
              )
                setDataChanged(false);
              else setDataChanged(true);
            },
          })}
        />
      </div>
      <div className="flex flex-col mb-4">
        <Label>{t("app.createboard.unit-label")}</Label>
        <Field
          defaultValue={boardOption.unit}
          type="text"
          register={register("unit", {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === boardOption.unit || e.target.value === "")
                setDataChanged(false);
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
        {loading ? (
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        ) : (
          t("app.save")
        )}
      </button>
    </>
  );
}
