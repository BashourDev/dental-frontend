import React, { useState } from "react";
import AppPlanRadioButtons from "../components/controls/AppPlanRadioButtons";

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
];

const UserPlanChange = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  return (
    <div className="w-full">
      <AppPlanRadioButtons
        selected={selectedPlan}
        setSelected={setSelectedPlan}
        plans={plans}
        isRegister={false}
      />
    </div>
  );
};

export default UserPlanChange;
