import AppProfilePictureInput from "../components/AppProfilePictureInput";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import AppFormTextArea from "../components/forms/AppFormTextArea";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ChangePassword from "../components/ChangePassword";
import { useTranslation } from "react-i18next";
import api from "../api/api";
import ChangeLocation from "../components/ChangeLocation";
import { setUser } from "../api/user";
import { useContext } from "react";
import UserContext from "../contexts/userContext";
import swal from "sweetalert";

const UserProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [doctor, setDoctor] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [cords, setCords] = useState({});
  const {
    user: { id },
    setUser: setUserContext,
  } = useContext(UserContext);
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

  const getDoctor = async () => {
    const res = await api.get(`/users/${id}`);
    setDoctor(res.data);
    setCords({ latitude: res.data.latitude, longitude: res.data.longitude });
  };

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append("profile_pic", selectedImage);
      formData.append("email", values?.email);
      formData.append("phone", values?.phone);
      formData.append("type", values?.type);
      formData.append("password", values?.password);

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

      formData.append("update_profile_pic", selectedImage ? true : false);

      await api.post(`/users/${id}/update`, formData);
      setUser({ ...doctor, ...values });
      setUserContext({
        ...doctor,
        ...values,
        first_media_only: {
          original_url: selectedImage
            ? URL.createObjectURL(selectedImage)
            : doctor?.first_media_only?.original_url,
        },
      });
      swal(t("updated_successfully"), {
        icon: "success",
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <div className="w-full space-y-10">
      <div className="bg-white rounded-md max-w-5xl space-y-8 py-5 px-8 shadow-md w-full">
        <h2 className="text-dark-blue text-xl font-semibold">
          {t("your_info")}
        </h2>
        <AppForm
          initialValues={doctor}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <AppProfilePictureInput
            selectedFile={selectedImage}
            existingImage={doctor?.first_media_only?.original_url}
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

          <AppSubmitButton isLoading={isLoading}>
            {t("save_changes")}
          </AppSubmitButton>
        </AppForm>
      </div>
      <ChangeLocation id={id} cords={cords} setCords={setCords} />
      <ChangePassword id={id} />
    </div>
  );
};

export default UserProfileForm;
