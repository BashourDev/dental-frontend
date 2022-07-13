import AppButton from "../controls/AppButton";
import AppForm from "../forms/AppForm";
import AppModal from "./AppModal";
import * as Yup from "yup";
import AppProfilePictureInput from "../AppProfilePictureInput";
import AppFormInput from "../forms/AppFormInput";
import AppFormTextArea from "../forms/AppFormTextArea";
import AppSubmitButton from "../forms/AppSubmitButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import api from "../../api/api";

const UserEditModal = ({ isOpen, onClose, info, setUsers }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object().shape({});
  const { t } = useTranslation();

  const handleEdit = async (values) => {
    let formData = new FormData();
    formData.append("profile_pic", selectedImage);
    formData.append("email", values?.email);
    formData.append("phone", values?.phone);

    formData.append("en_name", values?.en_name);
    formData.append("en_country", values?.en_country);
    formData.append("en_city", values?.en_city);
    formData.append("en_address", values?.en_address);
    formData.append("en_bio", values?.en_bio);

    formData.append("ar_name", values?.ar_name);
    formData.append("ar_country", values?.ar_country);
    formData.append("ar_city", values?.ar_city);
    formData.append("ar_address", values?.ar_address);
    formData.append("ar_bio", values?.ar_bio);

    formData.append("update_profile_pic", selectedImage ? 1 : 0);

    try {
      setIsLoading(true);
      const res = await api.post(`/users/${info?.id}/update`, formData);
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      setSelectedImage("");
      onClose();
      //   setUsers((old) =>
      //     old.map((o) => {
      //       if (o?.id === eid) {
      //         o.name = res.data?.name;
      //         o.role = res.data?.role;
      //         o.first_media_only = res.data?.first_media_only;
      //       }
      //       return o;
      //     })
      //   );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Edit User"}>
      <div className="space-y-5 flex flex-col items-start">
        <AppForm
          initialValues={info}
          validationSchema={validationSchema}
          onSubmit={handleEdit}
        >
          <AppProfilePictureInput
            selectedFile={selectedImage}
            onChange={(e) => setSelectedImage(e.target.files[0])}
            existingImage={info?.first_media_only?.original_url}
            label={t("choose_image")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

          <div className="p-3  ring-1 ring-dark-blue/70 rounded-md">
            <h1 className="text-xl text-dark-blue font-semibold pb-3">
              {t("english_info")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

          <AppSubmitButton isLoading={isLoading}>
            {t("save_changes")}
          </AppSubmitButton>
        </AppForm>
      </div>
    </AppModal>
  );
};

export default UserEditModal;
