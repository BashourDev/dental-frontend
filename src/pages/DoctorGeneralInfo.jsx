import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Loading from "../components/Loading";

const DoctorGeneralInfo = () => {
  const [doctor, setDoctor] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const { id } = useParams();

  const getDoctor = async () => {
    const res = await api.get(`/users/${id}`);
    setDoctor(res.data);
  };

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white max-w-6xl">
        <div className="container px-5 py-24 mx-auto">
          {isLoading && <Loading />}
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="space-y-2">
              <img
                alt={doctor?.first_media_only?.name}
                className="h-52 max-w-xs xl:max-w-sm 2xl:max-w-md object-cover object-center rounded border border-gray-200"
                src={doctor?.first_media_only?.original_url}
              />
              <div className="flex flex-col space-x-3 items-center text-medium-gray">
                <div className="flex items-center">
                  <MdPhone />
                  <span>{doctor?.phone}</span>
                </div>
                <div className="flex items-center">
                  <MdMail />
                  <span>{doctor?.email}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:px-10 md:py-6 mt-6 md:mt-0 space-y-3">
              <h2 className="flex text-sm title-font text-gray-500 tracking-widest">
                <MdLocationOn className="mt-0.5" />{" "}
                {t("ln") === "en" ? doctor?.en_country : doctor?.ar_country},{" "}
                {t("ln") === "en" ? doctor?.en_city : doctor?.ar_city},{" "}
                {t("ln") === "en" ? doctor?.en_address : doctor?.ar_address}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {t("ln") === "en" ? doctor?.en_name : doctor?.ar_name}
              </h1>

              <p className="leading-relaxed">
                {t("ln") === "en" ? doctor?.en_bio : doctor?.ar_bio}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorGeneralInfo;
