import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import AppButton from "../controls/AppButton";

const plans = [
  {
    name: "Padawan",
    price: 20,
    properties: [
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
    name: "Jedi Knight",
    price: 50,
    properties: [
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
    name: "Jedi Master",
    price: 80,
    properties: [
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
  // {
  //   name: "Startup",
  //   price: "12GB",
  //   cpus: "6 CPUs",
  //   disk: "160 GB SSD disk",
  // },
  // {
  //   name: "Business",
  //   ram: "16GB",
  //   cpus: "8 CPUs",
  //   disk: "512 GB SSD disk",
  // },
  // {
  //   name: "Enterprise",
  //   ram: "32GB",
  //   cpus: "12 CPUs",
  //   disk: "1024 GB SSD disk",
  // },
];

export default function AppPlanRadioButtons() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full px-4 pt-5 pb-16 space-y-8 max-w-5xl">
      <h1 className="text-lg md:text-2xl font-bold text-dark-blue w-full text-center">
        * Select a new plan and send a request to change it.
      </h1>
      <div className="flex flex-col mx-auto w-full">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="flex flex-wrap justify-center gap-5">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
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
                    relative flex items-start max-w-[14rem] w-full cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
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
                              {plan.name}
                            </span>
                            <span>$ {plan.price} /mo.</span>
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline my-2 ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span aria-hidden="true">{/* &middot; */}</span>{" "}
                            {plan.properties.map((p, j) => (
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
                                <span className="ml-2 py-1">{p?.name}</span>
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
        <AppButton className="my-8 w-2/3 md:w-1/3 self-center">
          Send Request
        </AppButton>
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
