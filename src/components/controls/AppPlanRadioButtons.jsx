import { RadioGroup } from "@headlessui/react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import AppButton from "../controls/AppButton";
import AppPlanPeriodRadioButtons from "./AppPlanPeriodRadioButtons";

export default function AppPlanRadioButtons({
  selected,
  setSelected,
  selectedPeriod,
  setSelectedPeriod,
  plans,
  isRegister,
}) {
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 pt-5 pb-16 space-y-8 max-w-5xl">
      <h1 className="text-lg md:text-2xl font-bold text-dark-blue w-full text-center">
        {isRegister ? t("select_plan") : t("select_new_plan")}
      </h1>
      <div className="flex flex-col mx-auto w-full">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="flex flex-wrap justify-center gap-5">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.en_name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex items-start ring-2 ring-light-gray/40 max-w-[14rem] w-full cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center w-full">
                        <div className="text-sm w-full">
                          <RadioGroup.Label
                            as="p"
                            className={`font-semibold text-xl  min-w-full pb-2  ${
                              checked ? "text-white" : "text-dark-blue"
                            }`}
                          >
                            <span className="text-sm font-semibold block">
                              {t("ln") === "en" ? plan.en_name : plan.ar_name}
                            </span>
                            {/* <span className="block">
                              $ {plan?.quarter_price} /3 mo.
                            </span>
                            <span className="block">
                              $ {plan?.semi_annual_price} /6 mo.
                            </span>
                            <span className="block">
                              $ {plan?.annual_price} /12 mo.
                            </span> */}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline my-2 ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span aria-hidden="true">{/* &middot; */}</span>{" "}
                            {plan.features.map((p, j) => (
                              <li key={j} className="flex items-center">
                                <svg
                                  className="w-5 h-5 text-dark-green fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="ml-2 py-1">
                                  {t("ln") === "en" ? p?.en_name : p?.ar_name}
                                </span>
                              </li>
                            ))}
                          </RadioGroup.Description>
                        </div>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white min-h-full">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <AppPlanPeriodRadioButtons
          isRegister={isRegister}
          plan={selected}
          selected={selectedPeriod}
          setSelected={setSelectedPeriod}
        />
        {isRegister ? null : (
          <AppButton className="my-8 w-2/3 md:w-1/3 self-center">
            {t("send_request")}
          </AppButton>
        )}
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
