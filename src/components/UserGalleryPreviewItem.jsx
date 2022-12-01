import React from "react";
import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit } from "react-icons/md";
import AppButton from "./controls/AppButton";

const UserGalleryPreviewItem = ({
  id,
  before,
  after,
  description,
  onEdit,
  onRemove,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white shadow-sm rounded border border-light-gray/30">
      <div className="flex flex-col items-center justify-between max-w-[22rem] w-full min-h-full py-4 px-2 md:px-4">
        <div className="flex gap-x-2 h-full">
          {before && (
            <div className="text-dark">
              <h3>{t("before")}</h3>
              <img
                className="rounded overflow-hidden max-h-[12rem] max-w-[10rem]"
                alt="before"
                src={before?.original_url}
              />
            </div>
          )}
          <div className="text-dark h-full">
            {before && <h3>{t("after")}</h3>}
            <img
              className="rounded overflow-hidden max-h-[12rem] max-w-[10rem]"
              alt="after"
              src={after?.original_url}
            />
          </div>
        </div>
        <p className="text-medium-gray pt-4 w-full text-start">
          <span className="text-dark-blue font-semibold">
            {t("description")}
          </span>{" "}
          {description}
        </p>
        <div className="w-full">
          <div className="divider"></div>
          <div className="self-end flex items-center w-full justify-evenly gap-x-5">
            <AppButton
              Icon={MdEdit}
              className="w-28"
              onClick={() => onEdit(id)}
            >
              {t("edit")}
            </AppButton>
            <AppButton
              Icon={MdDelete}
              className="w-28 bg-error hover:bg-error"
              onClick={() => onRemove(id)}
            >
              {t("delete")}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGalleryPreviewItem;
