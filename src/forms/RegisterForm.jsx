import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import AppFormTextArea from "../components/forms/AppFormTextArea";
import AppFormRadioButton from "../components/forms/AppFormRadioButton";
import { useState } from "react";
import AppProfilePictureInput from "../components/AppProfilePictureInput";

const RegisterForm = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [types, setTypes] = useState([
    { id: 1, name: "Doctor" },
    { id: 2, name: "Company" },
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
    <div className="bg-white rounded-md max-w-xl lg:max-w-2xl xl:max-w-3xl space-y-8 py-5 px-8 shadow-lg w-full mx-3">
      <h2 className="text-dark-blue text-xl font-semibold">Enter Your Info</h2>
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
            Choose the Account Type
          </label>
          <div role="group" className="flex text-xs lg:text-sm items-center">
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
            id={"name"}
            label={"Your Name "}
            placeholder={"Enter Your Name Here"}
            isRequired={true}
          />

          <AppFormInput
            id={"phone"}
            label={"Phone Number "}
            placeholder={"+963 999 999 999"}
            isRequired={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AppFormInput
            id={"email"}
            label={"Email Address "}
            placeholder={"me@example.com"}
            isRequired={true}
          />

          <AppFormInput
            id={"country"}
            label={"Country "}
            placeholder={"Syria"}
            isRequired={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AppFormInput
            id={"city"}
            label={"City "}
            placeholder={"Damascus"}
            isRequired={true}
          />

          <AppFormInput
            id={"address"}
            label={"Address "}
            placeholder={"Al-Hamrah main street"}
            isRequired={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AppFormInput
            id={"password"}
            label={"Password "}
            placeholder={"Enter The Password"}
            isRequired={true}
            type="password"
          />

          <AppFormInput
            id={"passwordConfirmation"}
            label={"Confirm Password "}
            placeholder={"Repeat The Password"}
            isRequired={true}
            type="password"
          />
        </div>
        <AppFormTextArea
          id={"bio"}
          label={"Your Bio "}
          placeholder={"some thing about yourself"}
          isRequired={true}
        />

        <AppSubmitButton>Submit</AppSubmitButton>
      </AppForm>
    </div>
  );
};

export default RegisterForm;
