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

const plans = [
  {
    id: 1,
    name: "Padawan",
    price: 20,
    features: [
      {
        id: 1,
        name: "something good 1",
      },
      {
        id: 2,
        name: "something good 2",
      },
      {
        id: 3,
        name: "something good 3",
      },
    ],
  },
  {
    id: 2,
    name: "Jedi Knight",
    price: 50,
    features: [
      {
        id: 1,
        name: "something good 1",
      },
      {
        id: 2,
        name: "something good 2",
      },
      {
        id: 3,
        name: "something good 3",
      },
      {
        id: 4,
        name: "something good 4",
      },
    ],
  },
  {
    id: 3,
    name: "Jedi Master",
    price: 80,
    features: [
      {
        id: 1,
        name: "something good 1",
      },
      {
        id: 2,
        name: "something good 2",
      },
      {
        id: 3,
        name: "something good 3",
      },
      {
        id: 4,
        name: "something good 4",
      },
      {
        id: 5,
        name: "something good 5",
      },
      {
        id: 6,
        name: "something good 6",
      },
      {
        id: 7,
        name: "something good 7",
      },
    ],
  },
];

const RegisterForm = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [selectedPlanPeriod, setSelectedPlanPeriod] = useState({
    plan_id: selectedPlan?.id,
    subscription_period: 3,
  });

  const [types, setTypes] = useState([
    { id: 1, name: t("doctor") },
    { id: 2, name: t("company") },
  ]);

  const initialValues = {
    name: "",
    phone: "",
    type: types[0].name,
    email: "",
    bio: "",
    country: "",
    city: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    phone: Yup.string().required("Phone Number is a required field"),
    email: Yup.string().required("Email is a required field"),
    bio: Yup.string().required("Bio is a required field"),
    country: Yup.string().required("Country is a required field"),
    city: Yup.string().required("City is a required field"),
    address: Yup.string().required("Address is a required field"),

    password: Yup.string().required("Enter the password"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password and password confirmation should match"
    ),
  });

  return (
    <div className="bg-white rounded-md max-w-4xl  space-y-8 py-5 px-8 shadow-lg w-full mx-3">
      <h2 className="text-dark-blue text-xl font-semibold">{t("your_info")}</h2>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
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
                value={type.name}
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

        <AppPlanRadioButtons
          selected={selectedPlan}
          setSelected={setSelectedPlan}
          plans={plans}
          isRegister={true}
          selectedPeriod={selectedPlanPeriod}
          setSelectedPeriod={setSelectedPlanPeriod}
        />

        <AppSubmitButton>{t("send_request")}</AppSubmitButton>
      </AppForm>
    </div>
  );
};

export default RegisterForm;
