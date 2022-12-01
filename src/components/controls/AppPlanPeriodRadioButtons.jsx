import { RadioGroup } from "@headlessui/react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import AppButton from "../controls/AppButton";

export default function AppPlanPeriodRadioButtons({
  selected,
  setSelected,
  plan,
  isRegister,
}) {
  const { t } = useTranslation();
  return (
    <div className="w-full px-4 pt-5 pb-16 space-y-8 max-w-5xl">
      <h1 className="text-lg md:text-2xl font-bold text-dark-blue w-full text-center">
        {t("select_plan_period")}
      </h1>
      <div className="flex flex-col mx-auto w-full">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="flex flex-wrap justify-center gap-5">
            <RadioGroup.Option
              key={plan.quarter_price}
              value={{ subscription_period: 3, plan_id: plan?.id }}
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
                          {/* <span className="text-sm font-semibold block">
                            {t("ln") === "en" ? plan.en_name : plan.ar_name}
                          </span> */}
                          <span className="block">
                            $ {plan?.quarter_price} /3 {t("months")}
                          </span>
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline my-2 ${
                            checked ? "text-sky-100" : "text-gray-500"
                          }`}
                        >
                          <span aria-hidden="true">{/* &middot; */}</span>{" "}
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

            <RadioGroup.Option
              key={plan.semi_annual_price}
              value={{ subscription_period: 6, plan_id: plan?.id }}
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
                          {/* <span className="text-sm font-semibold block">
                            {t("ln") === "en" ? plan.en_name : plan.ar_name}
                          </span> */}
                          <span className="block">
                            $ {plan?.semi_annual_price} /6 {t("months")}
                          </span>
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline my-2 ${
                            checked ? "text-sky-100" : "text-gray-500"
                          }`}
                        >
                          <span aria-hidden="true">{/* &middot; */}</span>{" "}
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

            <RadioGroup.Option
              key={plan.annual_price}
              value={{ subscription_period: 12, plan_id: plan?.id }}
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
                          {/* <span className="text-sm font-semibold block">
                            {t("ln") === "en" ? plan.en_name : plan.ar_name}
                          </span> */}
                          <span className="block">
                            $ {plan?.annual_price} /12 {t("months")}
                          </span>
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline my-2 ${
                            checked ? "text-sky-100" : "text-gray-500"
                          }`}
                        >
                          <span aria-hidden="true">{/* &middot; */}</span>{" "}
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
          </div>
        </RadioGroup>
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
