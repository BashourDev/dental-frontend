import React from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DoctorGallery from "./DoctorGallery";
import DoctorGeneralInfo from "./DoctorGeneralInfo";

const DoctorInfo = () => {
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
        <DoctorGeneralInfo />
      </TabPanel>
      <TabPanel>
        <DoctorGallery />
      </TabPanel>
    </Tabs>
  );
};

export default DoctorInfo;
