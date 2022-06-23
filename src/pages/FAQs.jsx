import React, { useState } from "react";
import AppDisclosure from "../components/AppDisclosure";

const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      title: "Why should I use this service?",
      description: "We provide the best methods to give you the best results.",
    },
    {
      title: "Are my personal information safe?",
      description:
        "No one can access your private data and we do not save and search queries or collect any user data.",
    },
  ]);
  return (
    <div className="max-w-2xl w-full space-y-5">
      <h1 className="text-dark-blue text-xl md:text-2xl font-semibold px-1">
        Frequently Asked Questions
      </h1>
      {faqs.map((f, i) => (
        <AppDisclosure key={i} title={f?.title} description={f?.description} />
      ))}
    </div>
  );
};

export default FAQs;
