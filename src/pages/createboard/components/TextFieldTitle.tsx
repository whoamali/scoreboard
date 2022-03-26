interface IProps {
  content: string;
}

export default function TextFieldTitle({ content }: IProps) {
  return (
    <h3 className="font-Fredoka text-slate-900 text-[27px] font-normal capitalize ">
      {content}
    </h3>
  );
}
