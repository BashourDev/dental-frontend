import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import CompanyInfoWizardStep from "../components/CompanyInfoWizardStep";
import DotcorInfoWizardStep from "../components/DotcorInfoWizardStep";
import LocationWizardStep from "../components/LocationWizardStep";
import CompaniesListing from "./CompaniesListing";
import DoctorsListing from "./DoctorsListing";

const FindCompanyWizard = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [cords, setCords] = useState({});
  return (
    <>
      <StepWizard>
        <LocationWizardStep
          stepName="location"
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          setCords={setCords}
          stepToGoTo={"company-info"}
        />
        <CompanyInfoWizardStep
          stepName="company-info"
          name={name}
          setName={setName}
        />
        <CompaniesListing stepName="companies-listing" />
      </StepWizard>
    </>
  );
};

export default FindCompanyWizard;
