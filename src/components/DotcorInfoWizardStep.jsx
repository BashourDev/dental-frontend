import React from "react";
import { useTranslation } from "react-i18next";
import { MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import { ReactComponent as Doctors } from "../assets/doctors.svg";

const DotcorInfoWizardStep = (props) => {
  const { t } = useTranslation();
  return (
    <div className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-2xl font-extrabold tracking-tight text-dark-blue sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl cursor-pointer">
                <span className="block ">
                  {t("do_you_have_a_doctor_in_mind")}{" "}
                </span>
                <span className="block text-dark-green ">
                  {t("leave_it_blank_if_you_dont")}
                </span>
              </h1>
              <input
                type="text"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
                placeholder={t("entity_name_placeholder")}
                className={
                  "text-dark-blue w-full md:w-5/6 h-12 rounded-md border border-medium-gray/40 px-2 ring-0  transition outline-none focus:border-dark-blue/60"
                }
              />

              <div className="relative flex flex-col sm:flex-row sm:gap-x-4">
                <button
                  onClick={() => props.goToNamedStep("doctors-listing")}
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-light-green rounded-md sm:mb-0 hover:bg-light-green/90 sm:w-auto"
                >
                  {t("done")}
                  <MdCheck className="text-xl" />
                </button>
                {/* <Link
                  to="/faqs"
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  {t("learn_more")}
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
              {/* <img src="https://media.istockphoto.com/photos/together-we-save-more-lives-than-we-would-individually-picture-id1152347304?k=20&m=1152347304&s=612x612&w=0&h=Xlz-5Qw4RRCor_lp71rxJuK9iTcOKouLWZlk_2GDgEc=" /> */}
              <Doctors className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotcorInfoWizardStep;
