import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CompanyGallery from "./CompanyGallery";
import CompanyGeneralInfo from "./CompanyGeneralInfo";

const CompanyInfo = () => {
  return (
    <Tabs
      className={"max-w-6xl w-full bg-white"}
      selectedTabClassName={
        "ring ring-light-green rounded-sm text-light-green font-medium"
      }
    >
      <TabList>
        <Tab>General Info</Tab>
        <Tab>Gallery</Tab>
      </TabList>

      <TabPanel>
        <CompanyGeneralInfo />
      </TabPanel>
      <TabPanel>
        <CompanyGallery />
      </TabPanel>
    </Tabs>
  );
};

export default CompanyInfo;
