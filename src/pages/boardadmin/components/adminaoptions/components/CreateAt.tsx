import { useTranslation } from "react-i18next";

interface IProps {
  date: string | undefined;
}

export default function CreateAt({ date }: IProps) {
  const { t } = useTranslation();
  return (
    <p className="mt-12 text-gray-500 font-Fredoka text-base text-center">
      {t("app.boardadmin.admin-options.createAt")}
      <br />
      {date}
    </p>
  );
}
