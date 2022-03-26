import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  content: string;
}

export default function TextFieldDiscription({ content }: IProps) {
  return (
    <p className="flex items-center">
      <span className="text-gray-500 mr-1 h-5">
        <FontAwesomeIcon icon={faCircleInfo} />
      </span>
      <span className="text-gray-500">{content}</span>
    </p>
  );
}
