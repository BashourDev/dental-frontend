import AppProfilePictureInput from "../components/AppProfilePictureInput";
import AppForm from "../components/forms/AppForm";
import AppFormInput from "../components/forms/AppFormInput";
import AppFormTextArea from "../components/forms/AppFormTextArea";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import * as Yup from "yup";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const UserProfileForm = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const { doctor, setDoctor } = useOutletContext();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    phone: Yup.string().required("Phone Number is a required field"),
    email: Yup.string().required("Email is a required field"),
    bio: Yup.string().required("Bio is a required field"),
    country: Yup.string().required("Country is a required field"),
    city: Yup.string().required("City is a required field"),
    address: Yup.string().required("Address is a required field"),
  });
  return (
    <div className="bg-white rounded-md max-w-5xl space-y-8 py-5 px-8 shadow-md w-full">
      <h2 className="text-dark-blue text-xl font-semibold">Your Info</h2>
      <AppForm initialValues={doctor} validationSchema={validationSchema}>
        <AppProfilePictureInput
          selectedFile={selectedImage}
          onChange={(e) => setSelectedImage(e.target.files[0])}
          label={"choose image"}
        />

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

        <AppFormTextArea
          id={"bio"}
          label={"Your Bio "}
          placeholder={"some thing about yourself"}
          isRequired={true}
        />

        <AppSubmitButton>Save Changes</AppSubmitButton>
      </AppForm>
    </div>
  );
};

export default UserProfileForm;
