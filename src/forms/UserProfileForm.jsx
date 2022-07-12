import AppProfilePictureInput from "../components/AppProfilePictureInput";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import AppFormTextArea from "../components/forms/AppFormTextArea";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ChangePassword from "../components/ChangePassword";
import { useTranslation } from "react-i18next";

const UserProfileForm = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const { doctor, setDoctor } = useOutletContext();
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    // name: Yup.string().required("Name is a required field"),
    // phone: Yup.string().required("Phone Number is a required field"),
    // email: Yup.string().required("Email is a required field"),
    // bio: Yup.string().required("Bio is a required field"),
    // country: Yup.string().required("Country is a required field"),
    // city: Yup.string().required("City is a required field"),
    // address: Yup.string().required("Address is a required field"),
  });
  return (
    <div className="w-full space-y-10">
      <div className="bg-white rounded-md max-w-5xl space-y-8 py-5 px-8 shadow-md w-full">
        <h2 className="text-dark-blue text-xl font-semibold">
          {t("your_info")}
        </h2>
        <AppForm initialValues={doctor} validationSchema={validationSchema}>
          <AppProfilePictureInput
            selectedFile={selectedImage}
            onChange={(e) => setSelectedImage(e.target.files[0])}
            label={t("choose_image")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AppFormInput
              id={"email"}
              label={t("email_label")}
              placeholder={"me@example.com"}
              isRequired={true}
            />
            <AppFormInput
              id={"phone"}
              label={t("phone_label")}
              placeholder={"+963 999 999 999"}
              isRequired={true}
            />
          </div>

          <div className="p-5 ring-1 ring-dark-blue/70 rounded-md">
            <h1 className="text-xl text-dark-blue font-semibold pb-3">
              {t("english_info")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AppFormInput
                id={"en_name"}
                label={t("name_label")}
                placeholder={t("name_placeholder")}
                isRequired={true}
              />

              <AppFormInput
                id={"en_country"}
                label={t("country_label")}
                placeholder={t("country_placeholder")}
                isRequired={true}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AppFormInput
                id={"en_city"}
                label={t("city_label")}
                placeholder={t("city_placeholder")}
                isRequired={true}
              />

              <AppFormInput
                id={"en_address"}
                label={t("address_label")}
                placeholder={t("address_placeholder")}
                isRequired={true}
              />
            </div>

            <AppFormTextArea
              id={"en_bio"}
              label={t("bio_label")}
              placeholder={t("bio_placeholder")}
              isRequired={true}
            />
          </div>

          <div className="p-5 ring-1 ring-dark-blue/70 rounded-md">
            <h1 className="text-xl text-dark-blue font-semibold pb-3">
              {t("arabic_info")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AppFormInput
                id={"ar_name"}
                label={t("name_label")}
                placeholder={t("name_placeholder")}
                isRequired={true}
              />

              <AppFormInput
                id={"ar_country"}
                label={t("country_label")}
                placeholder={t("country_placeholder")}
                isRequired={true}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <AppFormInput
                id={"ar_city"}
                label={t("city_label")}
                placeholder={t("city_placeholder")}
                isRequired={true}
              />

              <AppFormInput
                id={"ar_address"}
                label={t("address_label")}
                placeholder={t("address_placeholder")}
                isRequired={true}
              />
            </div>

            <AppFormTextArea
              id={"ar_bio"}
              label={t("bio_label")}
              placeholder={t("bio_placeholder")}
              isRequired={true}
            />
          </div>

          <AppSubmitButton>{t("save_changes")}</AppSubmitButton>
        </AppForm>
      </div>
      <ChangePassword />
    </div>
  );
};

export default UserProfileForm;
