interface IProps {
  title: string;
}

export default function BoardTitle({ title }: IProps) {
  return <p className="font-Fredoka text-6xl mt-10 mb-5">{title}</p>;
}
