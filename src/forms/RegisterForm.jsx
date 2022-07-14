import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import AppFormTextArea from "../components/forms/AppFormTextArea";
import AppFormRadioButton from "../components/forms/AppFormRadioButton";
import { useState } from "react";
import AppProfilePictureInput from "../components/AppProfilePictureInput";
import AppPlanRadioButtons from "../components/controls/AppPlanRadioButtons";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import api from "../api/api";
import LocationWizardStep from "../components/LocationWizardStep";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { t } = useTranslation();
  const [plans, setPlans] = useState([]);
  const [cords, setCords] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlanPeriod, setSelectedPlanPeriod] = useState({
    plan_id: selectedPlan?.id,
    subscription_period: 3,
  });

  const navigate = useNavigate();

  const getPlan = async () => {
    const res = await api.get("/plans");
    setPlans(res.data);
    setSelectedPlan(res.data[0]);
  };

  useEffect(() => {
    getPlan();
  }, []);

  const [types, setTypes] = useState([
    { id: 1, name: t("doctor") },
    { id: 2, name: t("company") },
  ]);

  const initialValues = {
    email: "",
    phone: "",
    type: types[0].name,
    password: "",
    passwordConfirmation: "",

    en_name: "",
    en_country: "",
    en_city: "",
    en_address: "",
    en_bio: "",

    ar_name: "",
    ar_country: "",
    ar_city: "",
    ar_address: "",
    ar_bio: "",
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string().required(t("required_field")),
    email: Yup.string().required(t("required_field")),

    en_name: Yup.string().required(t("required_field")),
    en_bio: Yup.string().required(t("required_field")),
    en_country: Yup.string().required(t("required_field")),
    en_city: Yup.string().required(t("required_field")),
    en_address: Yup.string().required(t("required_field")),

    ar_name: Yup.string().required(t("required_field")),
    ar_bio: Yup.string().required(t("required_field")),
    ar_country: Yup.string().required(t("required_field")),
    ar_city: Yup.string().required(t("required_field")),
    ar_address: Yup.string().required(t("required_field")),

    password: Yup.string().required(t("required_field")),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      t("passwords_mismatch")
    ),
  });

  const handleSubmit = async (values) => {
    if (!selectedImage) {
      swal({
        icon: "warning",
        text: t("please_select_a_profile_image"),
      });
      return;
    }

    if (!cords.latitude) {
      swal({
        icon: "warning",
        text: t("please_select_your_coordinates"),
      });
      return;
    }

    if (
      !selectedPlanPeriod?.subscription_period ||
      !selectedPlanPeriod?.plan_id
    ) {
      swal({
        icon: "warning",
        text: t("please_select_a_plan"),
      });
      return;
    }

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

    formData.append("plan_id", selectedPlanPeriod?.plan_id);
    formData.append(
      "subscription_period",
      selectedPlanPeriod?.subscription_period
    );

    formData.append("latitude", cords.latitude);
    formData.append("longitude", cords.longitude);

    try {
      setIsLoading(true);
      await api.post(`/register`, formData);
      swal(t("proccessing_request"), {
        icon: "success",
      });
      navigate("/#");
      setSelectedImage("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-md max-w-4xl  space-y-8 py-5 px-8 shadow-lg w-full mx-3">
      <h2 className="text-dark-blue text-xl font-semibold">{t("your_info")}</h2>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <AppProfilePictureInput
          selectedFile={selectedImage}
          onChange={(e) => setSelectedImage(e.target.files[0])}
          label={"choose image"}
        />
        <div>
          <label
            htmlFor="type"
            className="text-dark text-xs lg:text-sm focus:text-dark-blue mb-1 mx-1 focus-within:text-dark-blue"
          >
            {t("choose_account_type")}
          </label>
          <div
            role="group"
            className="flex gap-x-4 text-xs lg:text-sm items-center"
          >
            {types.map((type) => (
              <AppFormRadioButton
                key={type.id}
                id={type.id}
                name={"type"}
                value={type.id}
                text={type.name}
              />
            ))}
          </div>
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AppFormInput
            id={"password"}
            label={t("password")}
            placeholder={"••••••••••"}
            isRequired={true}
            type="password"
          />
          <AppFormInput
            id={"passwordConfirmation"}
            label={t("password_confirmation")}
            placeholder={"••••••••••"}
            isRequired={true}
            type="password"
          />
        </div>

        <AppPlanRadioButtons
          selected={selectedPlan}
          setSelected={setSelectedPlan}
          plans={plans}
          isRegister={true}
          selectedPeriod={selectedPlanPeriod}
          setSelectedPeriod={setSelectedPlanPeriod}
        />
        <LocationWizardStep setCords={setCords} hideNext />
        <AppSubmitButton isLoading={isLoading}>
          {t("send_request")}
        </AppSubmitButton>
      </AppForm>
    </div>
  );
};

export default RegisterForm;
