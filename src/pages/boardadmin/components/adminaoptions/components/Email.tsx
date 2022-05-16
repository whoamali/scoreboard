import { useForm } from "react-hook-form";

interface IProps {
  adminKey: string;
  email: string | undefined;
}

export default function Email({ adminKey, email }: IProps) {
  const { register, handleSubmit } = useForm<{ email: string }>();

  const submit = (data: { email: string }) => console.log(data);

  return (
    <div className="flex items-center justify-between mt-3">
      <input
        type="text"
        className="w-[485px] h-[50px] p-1 border-2 border-orange-300 rounded text-base transition focus:border-slate-900"
        defaultValue={email}
        placeholder={email ? "" : "Enter your email"}
        {...register("email", { required: true })}
      />
      <button
        className="w-[100px] h-[50px] border-2 transition border-orange-600 rounded-md bg-transparent text-orange-600 hover:bg-orange-600 hover:text-white font-normal text-xl font-Fredoka"
        onClick={handleSubmit(submit)}
      >
        {"send"}
      </button>
    </div>
  );
}
