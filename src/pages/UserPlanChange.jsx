import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";
import api from "../api/api";
import AppButton from "../components/controls/AppButton";
import AppPlanRadioButtons from "../components/controls/AppPlanRadioButtons";
import UserContext from "../contexts/userContext";

const UserPlanChange = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(user?.plan || {});
  const [selectedPlanPeriod, setSelectedPlanPeriod] = useState({
    plan_id: selectedPlan?.id,
    subscription_period: 3,
  });
  const [isLoading, setIsLoading] = useState(false);

  const getPlans = async () => {
    const res = await api.get("/plans");
    setPlans(res.data);
  };

  useEffect(() => {
    getPlans();
  }, []);

  const handleSubmit = async () => {
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

    await api.post(`/users/${user.id}/request-change-plan`, {
      plan_id: selectedPlanPeriod.plan_id,
      subscription_period: selectedPlanPeriod.subscription_period,
    });

    swal(t("proccessing_request"), {
      icon: "success",
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <AppPlanRadioButtons
        selected={selectedPlan}
        setSelected={setSelectedPlan}
        plans={plans}
        isRegister={true}
        selectedPeriod={selectedPlanPeriod}
        setSelectedPeriod={setSelectedPlanPeriod}
      />
      <AppButton className="w-2/3" isLoading={isLoading} onClick={handleSubmit}>
        {t("send_request")}
      </AppButton>
    </div>
  );
};

export default UserPlanChange;
