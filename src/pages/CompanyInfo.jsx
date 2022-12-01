import React from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CompanyGallery from "./CompanyGallery";
import CompanyGeneralInfo from "./CompanyGeneralInfo";

const CompanyInfo = () => {
  const { t } = useTranslation();
  return (
    <Tabs
      className={"max-w-6xl w-full bg-white"}
      selectedTabClassName={
        "ring ring-light-green rounded-sm text-light-green font-medium"
      }
    >
      <TabList>
        <Tab>{t("general_info")}</Tab>
        <Tab>{t("gallery")}</Tab>
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
