import React, { useEffect, useState } from "react";
import AppForm from "../../components/forms/AppForm";
import * as Yup from "yup";
import AppFormInput from "../../components/forms/AppFormInput";
import AppButton from "../../components/controls/AppButton";
import { MdAdd, MdCheck, MdEdit } from "react-icons/md";
import AddPlanFeatureModal from "../../components/modals/AddPlanFeatureModal";
import AppFormRadioButton from "../../components/forms/AppFormRadioButton";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import { useNavigate, useParams } from "react-router-dom";
import EditPlanFeatureModal from "../../components/modals/EditPlanFeatureModal";
import swal from "sweetalert";
import api from "../../api/api";

const EditPlan = () => {
  const [features, setFeatures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState({ id: 0 });
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isFeatureEditOpen, setIsFeatureEditOpen] = useState(false);
  const [types, setTypes] = useState([
    { id: 1, name: "Doctor" },
    { id: 2, name: "Company" },
  ]);

  const [plan, setPlan] = useState({
    en_name: "",
    ar_name: "",
    quarter_price: 0,
    semi_annual_price: 0,
    annual_price: 0,
    type: types[0].id,
  });

  const navigate = useNavigate();

  const { id } = useParams();

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
        setFeatures((old) =>
          old.filter((o) => o?.en_name !== feature?.en_name)
        );
        swal("Poof! The feature has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The feature is safe!");
      }
    });
  };

  const handleSubmit = async (values) => {
    await api.put(`/plans/${id}/update`, {
      ...values,
      features: features,
    });

    swal("The plan has been updated!", {
      icon: "success",
    });
    navigate("/admin/plans");
  };

  const getPlan = async () => {
    const res = await api.get(`/plans/${id}`);
    setPlan({
      en_name: res.data.en_name,
      ar_name: res.data.ar_name,
      quarter_price: res.data.quarter_price,
      semi_annual_price: res.data.semi_annual_price,
      annual_price: res.data.annual_price,
      type: res.data.type,
    });
    setFeatures(res.data.features);
  };

  useEffect(() => {
    getPlan();
  }, []);

  return (
    <div className="max-w-xl w-full py-5 px-2 space-y-5 bg-white rounded-md my-5 shadow-md">
      <AppForm
        initialValues={plan}
        validationSchema={Yup.object().shape({
          en_name: Yup.string().required().label("English Name"),
          ar_name: Yup.string().required().label("Arabic Name"),
          quarter_price: Yup.number()
            .required()
            .min(0)
            .label("Quarterly Price"),
          semi_annual_price: Yup.number()
            .required()
            .min(0)
            .label("Semi Annual Price"),
          annual_price: Yup.number().required().min(0).label("Annual Price"),
        })}
        onSubmit={handleSubmit}
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
                value={type.id}
                text={type.name}
              />
            ))}
          </div>
        </div>
        <AppFormInput
          id={"en_name"}
          label={"Plan Name in English "}
          placeholder={"Enter The Plan Name in English Here"}
          isRequired={true}
        />
        <AppFormInput
          id={"ar_name"}
          label={"Plan Name in Arabic "}
          placeholder={"Enter The Plan Name in Arabic Here"}
          isRequired={true}
        />
        <AppFormInput
          id={"quarter_price"}
          label={"Quarterly Price "}
          placeholder={"20"}
          isRequired={true}
          type={"number"}
        />

        <AppFormInput
          id={"semi_annual_price"}
          label={"Semi Annual Price "}
          placeholder={"50"}
          isRequired={true}
          type={"number"}
        />

        <AppFormInput
          id={"annual_price"}
          label={"Annual Price "}
          placeholder={"70"}
          isRequired={true}
          type={"number"}
        />

        <div className="flex flex-col gap-y-3">
          {features.map((f, i) => (
            <div key={i} className="flex items-center">
              <MdCheck className="text-success" />
              <div className="flex gap-2">
                <span className="text-dark">{f?.en_name}</span>
                <span className="text-dark">{f?.ar_name}</span>
              </div>
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

export default EditPlan;
