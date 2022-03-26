import { useNavigate } from "react-router-dom";

interface IProps {
  children: JSX.Element | string;
  link: string;
  className: string;
}

export default function Button(props: IProps) {
  let navigate = useNavigate();
  return (
    <button className={props.className} onClick={() => navigate(props.link)}>
      {props.children}
    </button>
  );
}
