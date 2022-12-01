import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PricingPlanItem from "../components/PricingPlanItem";

const Pricing = () => {
  const { t } = useTranslation();
  const [plans, setPlans] = useState({ dentists: [], companies: [] });

  return (
    <div className="flex flex-col items-center p-10 text-gray-700 md:pt-10 md:pb-20">
      <h2 className="text-2xl font-medium">{t("dentist_plans")}</h2>
      <div className="flex justify-center flex-wrap gap-x-10 gap-y-7 max-w-6xl w-full">
        {plans.dentists.map((p) => (
          <PricingPlanItem
            key={p.id}
            name={t("ln") === "en" ? p?.en_name : p?.ar_name}
            quarter_price={p?.quarter_price}
            semi_annual_price={p?.semi_annual_price}
            annual_price={p?.annual_price}
            features={p?.features}
          />
        ))}
      </div>

      <h2 className="text-2xl font-medium mt-20">{t("company_plans")}</h2>
      <div className="flex justify-center flex-wrap gap-x-10 gap-y-7 max-w-6xl w-full">
        {plans.companies.map((p) => (
          <PricingPlanItem
            key={p.id}
            name={t("ln") === "en" ? p?.en_name : p?.ar_name}
            quarter_price={p?.quarter_price}
            semi_annual_price={p?.semi_annual_price}
            annual_price={p?.annual_price}
            features={p?.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
