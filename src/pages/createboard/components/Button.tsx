import { useNavigate } from "react-router-dom";

interface IProps {
  children: JSX.Element | string;
  link: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: IProps) {
  let navigate = useNavigate();
  return (
    <button
      className={
        "border-2 border-orange-600 rounded-md bg-orange-600 text-white font-normal text-xl px-2 py-1 font-Fredoka w-full capitalize "
      }
      onClick={e => {
        props.onClick(e);
        navigate(props.link);
      }}
    >
      {props.children}
    </button>
  );
}
