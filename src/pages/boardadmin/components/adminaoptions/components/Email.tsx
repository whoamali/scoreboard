import { useState } from "react";
import { useForm } from "react-hook-form";

import Description from "./Description";
import { axiosIns } from "../../../../../utils";

interface IProps {
  adminKey: string;
  email: string | undefined;
}

export default function Email({ adminKey, email }: IProps) {
  const { register, handleSubmit } = useForm<{ email: string }>();

  const submit = (data: { email: string }) => {
    axiosIns.post("/admin/post/email", {
      admin_key: adminKey,
      email: data.email,
    });
  };

  return (
    <div className="c-10">
      <div className="cflex cflex-nowrap mt-3">
        <input
          type="email"
          className="c-8 h-[50px] p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
          defaultValue={email}
          placeholder={email ? "" : "Enter your email"}
          {...register("email", {
            required: true,
          })}
        />
        <button
          className="c-2 h-[50px] ml-2 border-2 transition border-orange-600 rounded-md bg-transparent text-orange-600 hover:bg-orange-600 hover:text-white font-normal text-xl font-Fredoka"
          onClick={handleSubmit(submit)}
        >
          {"send"}
        </button>
      </div>
      <Description
        content={
          "do not be afraid to lose your adminkey by entering your email!"
        }
      />
    </div>
  );
}
