interface IProps {
  children: string | JSX.Element | JSX.Element[];
}

export default function Label({ children }: IProps) {
  return <label className="capitalize text-2xl text-slate-900 font-Fredoka">{children}</label>;
}
