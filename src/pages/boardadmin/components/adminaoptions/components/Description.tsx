interface IProps {
  content: string;
}

export default function Description({ content }: IProps) {
  return <div className="text-gray-500 font-Fredoka text-base">{content}</div>;
}
