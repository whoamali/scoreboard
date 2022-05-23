import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useBoardData } from "./../../hooks";
import { Alert } from "./../../components";

import { BoardData } from "./components";

interface Inputs {
  user_key: string;
}

interface FetchError {
  hasError: boolean;
  message: unknown;
}

export default function Board() {
  const [fetchError, setFetchError] = React.useState<FetchError>({
    hasError: false,
    message: "",
  });
  const { user_key } = useParams();
  const { fetchData, boardData } = useBoardData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { t } = useTranslation();

  const onClick: SubmitHandler<Inputs> = React.useCallback(data => {
    navigate(data.user_key);
  }, []);

  React.useEffect(() => {
    if (user_key !== undefined) {
      fetchData({ user_key }).catch(err => {
        setFetchError({ hasError: true, message: err });
      });
    }
  }, [user_key]);

  return (
    <main>
      <Alert
        position="left"
        message={t("app.board.alert-error-message")}
        show={fetchError?.hasError}
        type="error"
      />
      {user_key === undefined ? (
        <section className="w-full h-[100vh] flex items-center justify-center">
          <div>
            <input
              type="text"
              placeholder={t("app.board.user-key-placeholder")}
              className="border-2 border-orange-600 rounded-md text-xl px-2 py-1 transition focus:border-slate-900"
              {...register("user_key", {
                required: true,
              })}
            />
            {errors.user_key && (
              <p className="flex items-center text-xs absolute">
                <span className="flex items-center text-red-800 mr-1 h-5">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </span>
                <span className="text-red-800">
                  {t("app.createboard.title-required-error")}
                </span>
              </p>
            )}
          </div>
          <button
            onClick={handleSubmit(onClick)}
            className="ml-2 border-2 border-orange-600 rounded-md bg-orange-600 text-white font-normal text-xl px-2 py-1 font-Fredoka capitalize"
          >
            {t("app.board.user-key-button-label")}
          </button>
        </section>
      ) : (
        <BoardData
          title={
            boardData?.title !== undefined
              ? boardData.title
              : `${t("app.score")} ${t("app.board")}`
          }
          description={boardData?.description}
          unit={boardData?.unit}
          players={boardData?.players}
          createAt={boardData?.create_date}
        />
      )}
    </main>
  );
}
