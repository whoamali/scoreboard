import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  content: string;
}

export default function TextFieldError({ content }: IProps) {
  return (
    <p className="flex items-center text-xs">
      <span className="flex items-center text-red-800 mr-1 h-5">
        <FontAwesomeIcon icon={faExclamationCircle} />
      </span>
      <span className="text-red-800">{content}</span>
    </p>
  );
}
