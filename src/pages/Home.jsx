import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import AboutUsHero from "../components/heros/AboutUsHero";
import FindDoctorHero from "../components/heros/FindDoctorHero";
import SpecialCentersCarousel from "../components/SpecialCentersCarousel";
import SpecialCompaniesCarousel from "../components/SpecialCompaniesCarousel";
import api from "../api/api";
import { useContext } from "react";
import InfoContext from "../contexts/infoContext";
import { useTranslation } from "react-i18next";
import { BigFooter } from "../components/BigFooter";

const Home = () => {
  const [specialCenters, setSpecialCenters] = useState([]);
  const [specialCompanies, setSpecialCompanies] = useState([]);

  const { t } = useTranslation();

  const infoContext = useContext(InfoContext);

  const getDoctorsAndCompanies = async () => {
    const res = await api.get("/special/doctors-and-companies");
    setSpecialCenters(res.data.specialDoctors);
    setSpecialCompanies(res.data.specialCompanies);
  };

  useEffect(() => {
    getDoctorsAndCompanies();
  }, []);

  return (
    <div className="w-full">
      <div>
        <FindDoctorHero
          welcomeBlueTitle={
            t("ln") === "en"
              ? infoContext?.info?.en_welcome_blue_title
              : infoContext?.info?.ar_welcome_blue_title
          }
          welcomeGreenTitle={
            t("ln") === "en"
              ? infoContext?.info?.en_welcome_green_title
              : infoContext?.info?.ar_welcome_green_title
          }
          welcomeSubtitle={
            t("ln") === "en"
              ? infoContext?.info?.en_welcome_subtitle
              : infoContext?.info?.ar_welcome_subtitle
          }
        />
        <div id="about-us" className="py-20">
          <AboutUsHero
            title={
              t("ln") === "en"
                ? infoContext?.info?.en_about_us_title
                : infoContext?.info?.ar_about_us_title
            }
            subtitle={
              t("ln") === "en"
                ? infoContext?.info?.en_about_us_subtitle
                : infoContext?.info?.ar_about_us_subtitle
            }
            description={
              t("ln") === "en"
                ? infoContext?.info?.en_about_us_description
                : infoContext?.info?.ar_about_us_description
            }
          />
        </div>

        <div className="max-w-7xl w-screen mx-auto  pt-10 pb-5 space-y-10 overflow-x-hidden">
          <SpecialCentersCarousel
            title={
              t("ln") === "en"
                ? infoContext?.info?.en_special_centers_title
                : infoContext?.info?.ar_special_centers_title
            }
            subtitle={
              t("ln") === "en"
                ? infoContext?.info?.en_special_centers_subtitle
                : infoContext?.info?.ar_special_centers_subtitle
            }
            centers={specialCenters}
          />
        </div>

        <div className="max-w-7xl w-screen mx-auto pb-10 space-y-10 overflow-x-hidden">
          <SpecialCompaniesCarousel
            title={
              t("ln") === "en"
                ? infoContext?.info?.en_special_companies_title
                : infoContext?.info?.ar_special_companies_title
            }
            subtitle={
              t("ln") === "en"
                ? infoContext?.info?.en_special_companies_subtitle
                : infoContext?.info?.ar_special_companies_subtitle
            }
            companies={specialCompanies}
          />
        </div>

        {/* <div id="contact-us">
        <Footer />
        <BigFooter />
      </div> */}
      </div>
      <div
        id="contact-us"
        className="relative w-full flex justify-center bg-dark-blue mt-10"
      >
        <svg
          className="absolute top-0 w-full h-6 -mt-4 sm:-mt-10 sm:h-16 text-dark-blue"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path
            fill="#204066"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <BigFooter />
      </div>
    </div>
  );
};

export default Home;
