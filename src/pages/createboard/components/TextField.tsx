import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "number" | "text" | "textarea";
  placeholder: string | undefined;
  register: UseFormRegisterReturn;
}

export default function TextField({ type, placeholder, register }: IProps) {
  return (
    <>
      {type !== "textarea" ? (
        <input
          type={type}
          className={
            "w-full border-2 border-orange-600 rounded-md text-xl px-2 py-1 transition focus:border-slate-900"
          }
          placeholder={placeholder}
          defaultValue={type === "number" ? 10 : undefined}
          min={type === "number" ? 1 : undefined}
          max={type === "number" ? 1000 : undefined}
          {...register}
        />
      ) : (
        <textarea
          rows={10}
          className={
            "w-full border-2 border-orange-600 rounded-md text-base px-2 py-1 transition focus:border-slate-900"
          }
          {...register}
        ></textarea>
      )}
    </>
  );
}
