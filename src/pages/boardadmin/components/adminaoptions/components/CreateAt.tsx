import { useTranslation } from "react-i18next";

interface IProps {
  date: string | undefined;
}

export default function CreateAt({ date }: IProps) {
  const { t } = useTranslation();
  const dateConst = new Date(date !== undefined ? date : "");

  return (
    <p className="c-10 mt-12 text-gray-500 font-Fredoka text-base text-center">
      {t("app.boardadmin.admin-options.createAt")}
      <br />
      {dateConst.toLocaleDateString()}
    </p>
  );
}
