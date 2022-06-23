import React, { useState } from "react";
import PricingPlanItem from "../components/PricingPlanItem";

const Pricing = () => {
  const [plans, setPlans] = useState({
    dentists: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        ],
      },
    ],
    companies: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        ],
      },
    ],
  });
  return (
    <div className="flex flex-col items-center p-10 text-gray-700 md:pt-10 md:pb-20">
      <h2 className="text-2xl font-medium">Dentists Plans</h2>
      <div className="flex justify-center flex-wrap gap-x-10 gap-y-7 max-w-6xl w-full">
        {plans.dentists.map((p) => (
          <PricingPlanItem
            key={p.id}
            name={p?.name}
            price={p?.price}
            properties={p?.properties}
          />
        ))}
      </div>

      <h2 className="text-2xl font-medium mt-20">Companies Plans</h2>
      <div className="flex justify-center flex-wrap gap-x-10 gap-y-7 max-w-6xl w-full">
        {plans.dentists.map((p) => (
          <PricingPlanItem
            key={p.id}
            name={p?.name}
            price={p?.price}
            properties={p?.properties}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
