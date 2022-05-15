import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "text" | "textarea";
  register: UseFormRegisterReturn;
  defaultValue: string | null | undefined;
}

export default function Field({ type, register, defaultValue }: IProps) {
  return (
    <>
      {type === "text" ? (
        <input
          type={type}
          className="w-full border-2 border-orange-600 rounded-md text-xl px-2 py-1 transition focus:border-slate-900"
          defaultValue={defaultValue === null ? "" : defaultValue}
          {...register}
        />
      ) : (
        <textarea
          rows={10}
          className={
            "w-full border-2 border-orange-600 rounded-md text-base px-2 py-1 transition focus:border-slate-900"
          }
          defaultValue={defaultValue === null ? "" : defaultValue}
          {...register}
        ></textarea>
      )}
    </>
  );
}
