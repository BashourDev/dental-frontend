import React, { useEffect, useState } from "react";
import AppForm from "../../components/forms/AppForm";
import * as Yup from "yup";
import AppFormInput from "../../components/forms/AppFormInput";
import AppButton from "../../components/controls/AppButton";
import { MdAdd, MdCheck, MdEdit } from "react-icons/md";
import AddPlanFeatureModal from "../../components/modals/AddPlanFeatureModal";
import AppFormRadioButton from "../../components/forms/AppFormRadioButton";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import { useParams } from "react-router-dom";
import EditPlanFeatureModal from "../../components/modals/EditPlanFeatureModal";
import swal from "sweetalert";

const AddEditPlan = () => {
  const [features, setFeatures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState({ id: 0 });
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isFeatureEditOpen, setIsFeatureEditOpen] = useState(false);
  const [types, setTypes] = useState([
    { id: 1, name: "Doctor" },
    { id: 2, name: "Company" },
  ]);

  const params = useParams();

  const handleEditFeature = (feature) => {
    setSelectedFeature(feature);
    setIsFeatureEditOpen(true);
  };

  const handleRemoveFeature = (feature) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this feature!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! The feature has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The feature is safe!");
      }
    });
  };

  useEffect(() => {
    // if there is an id param then fetch the plan info with it's features
  }, []);

  return (
    <div className="max-w-xl w-full py-5 px-2 space-y-5">
      <AppForm
        initialValues={{ name: "", price: 0, type: types[0].name }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required().label("Name"),
          price: Yup.number().required().min(0).label("Price"),
        })}
      >
        <div>
          <label
            htmlFor="type"
            className="text-dark text-xs lg:text-sm focus:text-dark-blue mb-1 mx-1 focus-within:text-dark-blue"
          >
            Who is it for?
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
        <AppFormInput
          id={"name"}
          label={"Plan Name "}
          placeholder={"Enter The Plan Name Here"}
          isRequired={true}
        />
        <AppFormInput
          id={"price"}
          label={"Plan Price "}
          placeholder={"20"}
          isRequired={true}
          type={"number"}
        />

        <div className="flex flex-col gap-y-3">
          {features.map((f) => (
            <div className="flex items-center">
              <MdCheck className="text-success" />
              <span className="text-dark">{f?.title}</span>
              <div className="flex gap-x-2 px-4">
                <button
                  className="btn btn-warning btn-xs"
                  onClick={() => handleEditFeature(f)}
                >
                  edit
                </button>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => handleRemoveFeature(f)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          <AppButton
            Icon={MdAdd}
            onClick={() => setIsFeatureOpen(true)}
            className={"bg-dark-blue hover:bg-dark-blue/95"}
          >
            Add Feature
          </AppButton>
          <AppSubmitButton Icon={MdCheck}>Submit</AppSubmitButton>
        </div>
      </AppForm>
      <AddPlanFeatureModal
        isOpen={isFeatureOpen}
        onClose={() => setIsFeatureOpen(false)}
        setFeatures={setFeatures}
      />
      <EditPlanFeatureModal
        isOpen={isFeatureEditOpen}
        onClose={() => setIsFeatureEditOpen(false)}
        setFeatures={setFeatures}
        selectedFeature={selectedFeature}
      />
    </div>
  );
};

export default AddEditPlan;
