import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import Description from "./Description";

interface IProps {
  adminKey: string;
  username: string | undefined;
}

export default function BoardId({ adminKey, username }: IProps) {
  const { register, handleSubmit } = useForm<{ username: string }>();

  const submit = (data: { username: string }) => console.log(data);

  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <input
          type="text"
          className="w-[485px] h-[50px] p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
          defaultValue={username}
          placeholder={"Enter your username"}
          {...register("username", { required: true })}
        />
        <button
          className="w-[100px] h-[50px] border-2 transition border-orange-600 rounded-md bg-transparent text-orange-600 hover:bg-orange-600 hover:text-white font-normal text-xl font-Fredoka"
          onClick={handleSubmit(submit)}
        >
          {"check"}
        </button>
      </div>
      <p className="flex items-center text-xs">
        <span className="flex items-center text-red-800 mr-1 h-5">
          <FontAwesomeIcon icon={faExclamationCircle} />
        </span>
        <span className="text-red-800">{"not available"}</span>
      </p>
      <Description content={"you can choose a usename for your board!"} />
    </>
  );
}
