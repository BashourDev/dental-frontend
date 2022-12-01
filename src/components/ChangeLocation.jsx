import React from "react";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";
import api from "../api/api";
import AppButton from "./controls/AppButton";
import LocationWizardStep from "./LocationWizardStep";

const ChangeLocation = ({ id, cords, setCords }) => {
  const { t } = useTranslation();

  const handleChange = async () => {
    if (!cords.latitude) {
      swal({
        icon: "warning",
        text: t("please_select_your_coordinates"),
      });
      return;
    }

    await api.put(`/users/${id}/change-coords`);
    swal(t("updated_successfully"), {
      icon: "success",
    });
  };

  return (
    <div className="py-5 bg-white rounded-md shadow-md px-8 space-y-8">
      <h2 className="text-dark-blue text-xl font-semibold">
        {t("change_location")}
      </h2>
      <LocationWizardStep cords={cords} setCords={setCords} hideNext />
      <AppButton className="w-full" onClick={handleChange}>
        Save Changes
      </AppButton>
    </div>
  );
};

export default ChangeLocation;
