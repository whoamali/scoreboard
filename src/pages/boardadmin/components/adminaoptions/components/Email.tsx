import { useState } from "react";
import { useForm } from "react-hook-form";

import Description from "./Description";
import { axiosIns } from "../../../../../utils";

interface IProps {
  adminKey: string;
  email: string | null | undefined;
}

export default function Email({ adminKey, email }: IProps) {
  const [emailState, setEmailState] = useState<IProps["email"]>(email);
  const { register, handleSubmit } = useForm<{ email: string }>();

  const submit = (data: { email: string }) => {
    axiosIns
      .post("/admin/post/email", {
        admin_key: adminKey,
        email: data.email,
      })
      .then(res => {
        setEmailState(data.email);
      });
  };

  return (
    <>
      <div className="flex items-center justify-between mt-3">
        <input
          type="text"
          className="w-[485px] h-[50px] p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
          defaultValue={emailState ?? ""}
          placeholder={emailState ? "" : "Enter your email"}
          {...register("email", {
            required: true,
            value: emailState ?? undefined,
          })}
        />
        <button
          className="w-[100px] h-[50px] border-2 transition border-orange-600 rounded-md bg-transparent text-orange-600 hover:bg-orange-600 hover:text-white font-normal text-xl font-Fredoka"
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
    </>
  );
}
