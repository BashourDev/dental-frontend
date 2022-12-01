import React from "react";
import { useTranslation } from "react-i18next";

const DoctorGalleryItem = ({ before, after, description }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center max-w-[22rem] w-full py-2 px-2 md:px-4 rounded-md border border-light-gray/50 bg-white shadow-sm">
      <div className="flex gap-x-2 max-h-56 h-full">
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
        <div className="text-dark">
          {before && <h3>{t("after")}</h3>}
          <img
            className="rounded overflow-hidden max-h-[12rem] max-w-[10rem]"
            alt="after"
            src={after?.original_url}
          />
        </div>
      </div>
      <p className="text-medium-gray py-2 w-full text-start">
        <span className="text-dark-blue font-semibold">{t("description")}</span>{" "}
        {description}
      </p>
    </div>
  );
};

export default DoctorGalleryItem;
