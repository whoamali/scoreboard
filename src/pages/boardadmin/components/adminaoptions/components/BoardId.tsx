import { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import Description from "./Description";
import { axiosIns } from "../../../../../utils";

interface IProps {
  adminKey: string;
  username: string | undefined;
}

export default function BoardId({ adminKey, username }: IProps) {
  const [keyValidation, setKeyValidation] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<{ username: string }>();
  const { t } = useTranslation();

  const submit = (data: { username: string }) => {
    setLoading(true);
    axiosIns
      .post("/admin/post/user_key", {
        admin_key: adminKey,
        user_key: data.username,
      })
      .then(res => {
        setKeyValidation(res.data.success);
        setLoading(false);
      });
  };

  return (
    <div className="c-10">
      <div className="cflex cflex-nowrap mt-3">
        <input
          type="text"
          className="c-8 h-[50px] p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
          defaultValue={username}
          placeholder={"Enter your username"}
          {...register("username", { required: true })}
        />
        <button
          className="c-2 h-[50px] ml-2 border-2 transition border-orange-600 rounded-md bg-transparent text-orange-600 hover:bg-orange-600 hover:text-white font-normal text-xl capitalize font-Fredoka"
          onClick={handleSubmit(submit)}
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            t("app.check")
          )}
        </button>
      </div>
      {!keyValidation && (
        <p className="flex items-center text-xs">
          <span className="flex items-center text-red-800 mr-1 h-5">
            <FontAwesomeIcon icon={faExclamationCircle} />
          </span>
          <span className="text-red-800">{"not available"}</span>
        </p>
      )}

      <Description content={"you can choose a usename for your board!"} />
    </div>
  );
}
