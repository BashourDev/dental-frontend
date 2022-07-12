import React from "react";
import { useTranslation } from "react-i18next";

const CompanyGalleryItem = ({ image, description }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center max-w-[22rem] py-2 px-2 md:px-4 rounded-md border border-light-gray/50 bg-white shadow-sm">
      <div className="flex gap-x-2">
        <div className="text-dark">
          <img
            className="rounded overflow-hidden max-h-[14rem]"
            alt="project"
            src={image}
          />
        </div>
      </div>
      <p className="text-medium-gray py-2">
        <span className="text-dark-blue font-semibold">{t("description")}</span>{" "}
        {description}
      </p>
    </div>
  );
};

export default CompanyGalleryItem;
