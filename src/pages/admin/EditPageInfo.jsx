import React, { useState } from "react";
import AppForm from "../../components/forms/AppForm";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import { Formik } from "formik";
import api from "../../api/api";
import grayImage from "../../assets/gray.png";
import { useEffect } from "react";
import swal from "sweetalert";
import AppFormInput from "../../components/forms/AppFormInput";

const EditPageInfo = () => {
  const [infoEN, setInfoEN] = useState({
    //EN
    // Welcome Hero
    en_welcome_blue_title: "Find Dentists in ",
    en_welcome_green_title: "Your Area!",
    en_welcome_subtitle:
      "We made the search process very easy, which would give you the best results.",
    // About Us Hero
    en_about_us_title: "About Us",
    en_about_us_subtitle: "Learn More About Who We Are",
    en_about_us_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus reiciendis voluptatem rem quam animi, repellat, quisquam ab ducimus dolorum similique quibusdam fugit nulla placeat eaque ipsum ullam dolores doloremque?",
    // Special Centers
    en_special_centers_title: "Special Doctors",
    en_special_centers_subtitle: "Check Out Our Selective Special Doctors",
    // Special Doctors
    en_special_companies_title: "Special Companies",
    en_special_companies_subtitle: "Check Out Our Selective Special Companies",
  });

  const [infoAR, setInfoAR] = useState({
    //AR
    // Welcome Hero
    ar_welcome_blue_title: "Find Dentists in ",
    ar_welcome_green_title: "Your Area!",
    ar_welcome_subtitle:
      "We made the search process very easy, which would give you the best results.",
    // About Us Hero
    ar_about_us_title: "About Us",
    ar_about_us_subtitle: "Learn More About Who We Are",
    ar_about_us_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus reiciendis voluptatem rem quam animi, repellat, quisquam ab ducimus dolorum similique quibusdam fugit nulla placeat eaque ipsum ullam dolores doloremque?",
    // Special Centers
    ar_special_centers_title: "Special Doctors",
    ar_special_centers_subtitle: "Check Out Our Selective Special Doctors",
    // Special Doctors
    ar_special_companies_title: "Special Companies",
    ar_special_companies_subtitle: "Check Out Our Selective Special Companies",
  });

  const [infoContact, setInfoContact] = useState({
    phone: "099999999",
    email: "some@email.com",
    en_address: "address in english",
    ar_address: "address in arabic",
  });

  const handleSubmitContact = async () => {
    await api.put("/admin/info/contact/update");
    swal("Updated Successfully", {
      icon: "success",
    });
  };

  const handleSubmitEN = async (values) => {
    await api.put("/admin/info/en/update", values);
    setInfoEN((old) => ({ ...old, ...values }));
    swal("Updated Successfully", {
      icon: "success",
    });
  };

  const handleSubmitAR = async (values) => {
    await api.put("/admin/info/ar/update", values);
    setInfoAR((old) => ({ ...old, ...values }));
    swal("Updated Successfully", {
      icon: "success",
    });
  };

  const getInfo = async () => {
    const res = await api.get("/info");
    setInfoEN(res.data);
    setInfoAR(res.data);
    setInfoContact(res.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="space-y-10 py-10">
      <div className="max-w-6xl w-full p-5 rounded bg-white space-y-5">
        <h1 className="text-2xl text-dark-blue font-semibold">General Info</h1>
        <AppForm initialValues={infoContact} onSubmit={handleSubmitContact}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AppFormInput
              id={"email"}
              label={"Email"}
              placeholder={"me@example.com"}
            />
            <AppFormInput
              id={"phone"}
              label={"Phone"}
              placeholder={"+963 999 999 999"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AppFormInput
              id={"en_address"}
              label={"Address in English"}
              placeholder={""}
            />
            <AppFormInput
              id={"ar_address"}
              label={"Address in Arabic"}
              placeholder={""}
            />
          </div>
          <AppSubmitButton>Save</AppSubmitButton>
        </AppForm>
      </div>

      <div className="divider"></div>

      <Formik
        initialValues={infoEN}
        validationSchema={Yup.object().shape({})}
        onSubmit={handleSubmitEN}
        enableReinitialize
      >
        {({ values, handleChange }) => (
          <>
            <h1 className="text-2xl text-dark-blue font-semibold">
              English Content
            </h1>
            {/* Welcome Hero */}
            <section className="px-2 py-32 bg-white md:px-0">
              <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                  <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                      <h1 className="text-4xl font-extrabold tracking-tight text-dark-blue sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                        <input
                          id="en_welcome_blue_title"
                          name="en_welcome_blue_title"
                          type={"text"}
                          className="block xl:inline"
                          value={values["en_welcome_blue_title"]}
                          onChange={handleChange("en_welcome_blue_title")}
                        />
                        <input
                          id="en_welcome_green_title"
                          type={"text"}
                          className="block text-dark-green xl:inline"
                          value={values["en_welcome_green_title"]}
                          onChange={handleChange("en_welcome_green_title")}
                        />
                      </h1>
                      <textarea
                        id="en_welcome_subtitle"
                        className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl w-full resize-none h-32"
                        value={values["en_welcome_subtitle"]}
                        onChange={handleChange("en_welcome_subtitle")}
                      />

                      <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                        <Link
                          to="#"
                          className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-light-green rounded-md sm:mb-0 hover:bg-light-green/90 sm:w-auto"
                        >
                          Try It Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                        <Link
                          to="#"
                          className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                      <img src={grayImage} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Of Welcome Hero */}

            {/* About Us Hero */}
            <div className="max-w-7xl w-full p-5">
              <div className="px-2 sm:px-6 pb-8 flex flex-col items-center space-y-4">
                <input
                  id="en_about_us_title"
                  value={values["en_about_us_title"]}
                  onChange={handleChange("en_about_us_title")}
                  className="text-light-green text-center w-full font-semibold text-base bg-transparent"
                />

                <textarea
                  id="en_about_us_subtitle"
                  value={values["en_about_us_subtitle"]}
                  onChange={handleChange("en_about_us_subtitle")}
                  className="text-dark-blue text-center max-w-sm w-full font-bold text-3xl resize-none bg-transparent"
                />

                <div className="w-2/6 md:w-1/6 h-0.5 bg-dark-blue mt-2"></div>
              </div>
              <div className="text-medium-gray w-full flex flex-col justify-center items-center">
                <textarea
                  id="en_about_us_description"
                  value={values["en_about_us_description"]}
                  onChange={handleChange("en_about_us_description")}
                  className="w-full max-w-3xl text-center h-36 resize-none bg-transparent"
                />
              </div>
            </div>
            {/* End Of About Us Hero */}

            {/* Special Companies */}
            <div className="bg-white rounded-sm pt-8 pb-12">
              <div className="px-2 sm:px-6 pb-8 flex flex-col items-center space-y-4">
                <input
                  id="en_special_companies_title"
                  value={values["en_special_companies_title"]}
                  onChange={handleChange("en_special_companies_title")}
                  className="text-light-green text-center w-full font-semibold text-base"
                />

                <textarea
                  id="en_special_companies_subtitle"
                  value={values["en_special_companies_subtitle"]}
                  onChange={handleChange("en_special_companies_subtitle")}
                  className="text-dark-blue text-center max-w-sm w-full font-bold text-3xl resize-none"
                />

                <div className="w-2/6 md:w-1/6 h-0.5 bg-dark-blue mt-2"></div>
              </div>
            </div>
            {/* End Of Special Companies */}

            {/* Special Doctors */}
            <div className="bg-dark-blue rounded-sm pt-8 pb-12">
              <div className="px-2 sm:px-6 pb-8 flex flex-col items-center space-y-4">
                <input
                  id="en_special_centers_title"
                  value={values["en_special_centers_title"]}
                  onChange={handleChange("en_special_centers_title")}
                  className="text-light-green text-center w-full font-semibold text-base bg-transparent"
                />

                <textarea
                  id="en_special_centers_subtitle"
                  value={values["en_special_centers_subtitle"]}
                  onChange={handleChange("en_special_centers_subtitle")}
                  className="text-white text-center max-w-sm w-full font-bold text-3xl bg-transparent resize-none"
                />

                <div className="w-2/6 md:w-1/6 h-0.5 bg-white mt-2"></div>
              </div>
            </div>
            {/* End Of Special Doctors */}
            <AppSubmitButton>Save</AppSubmitButton>
          </>
        )}
      </Formik>

      <div className="divider"></div>

      {/* AR */}
      <Formik
        initialValues={infoAR}
        validationSchema={Yup.object().shape({})}
        onSubmit={handleSubmitAR}
        enableReinitialize
      >
        {({ values, handleChange }) => (
          <div dir="rtl" className="w-full space-y-10">
            <h1 className="text-2xl text-dark-blue font-semibold">
              المحتوى العربي
            </h1>
            {/* Welcome Hero */}
            <section className="px-2 py-32 bg-white md:px-0">
              <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                  <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                      <h1 className="text-4xl font-extrabold tracking-tight text-dark-blue sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                        <input
                          id="ar_welcome_blue_title"
                          name="ar_welcome_blue_title"
                          type={"text"}
                          className="block xl:inline"
                          value={values["ar_welcome_blue_title"]}
                          onChange={handleChange("ar_welcome_blue_title")}
                        />
                        <input
                          id="ar_welcome_green_title"
                          type={"text"}
                          className="block text-dark-green xl:inline"
                          value={values["ar_welcome_green_title"]}
                          onChange={handleChange("ar_welcome_green_title")}
                        />
                      </h1>
                      <textarea
                        id="ar_welcome_subtitle"
                        className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl w-full resize-none h-32"
                        value={values["ar_welcome_subtitle"]}
                        onChange={handleChange("ar_welcome_subtitle")}
                      />

                      <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                        <Link
                          to="#"
                          className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-light-green rounded-md sm:mb-0 hover:bg-light-green/90 sm:w-auto"
                        >
                          Try It Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                        <Link
                          to="#"
                          className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                      <img src={grayImage} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Of Welcome Hero */}

            {/* About Us Hero */}
            <div className="max-w-7xl w-full p-5">
              <div className="px-2 sm:px-6 pb-8 flex flex-col items-center space-y-4">
                <input
                  id="ar_about_us_title"
                  value={values["ar_about_us_title"]}
                  onChange={handleChange("ar_about_us_title")}
                  className="text-light-green text-center w-full font-semibold text-base bg-transparent"
                />

                <textarea
                  id="ar_about_us_subtitle"
                  value={values["ar_about_us_subtitle"]}
                  onChange={handleChange("ar_about_us_subtitle")}
                  className="text-dark-blue text-center max-w-sm w-full font-bold text-3xl resize-none bg-transparent"
                />

                <div className="w-2/6 md:w-1/6 h-0.5 bg-dark-blue mt-2"></div>
              </div>
              <div className="text-medium-gray w-full flex flex-col justify-center items-center">
                <textarea
                  id="ar_about_us_description"
                  value={values["ar_about_us_description"]}
                  onChange={handleChange("ar_about_us_description")}
                  className="w-full max-w-3xl text-center h-36 resize-none bg-transparent"
                />
              </div>
            </div>
            {/* End Of About Us Hero */}

            {/* Special Companies */}
            <div className="bg-white rounded-sm pt-8 pb-12">
              <div className="px-2 sm:px-6 pb-8 flex flex-col items-center space-y-4">
                <input
                  id="ar_special_companies_title"
                  value={values["ar_special_companies_title"]}
                  onChange={handleChange("ar_special_companies_title")}
                  className="text-light-green text-center w-full font-semibold text-base"
                />

                <textarea
                  id="ar_special_companies_subtitle"
                  value={values["ar_special_companies_subtitle"]}
                  onChange={handleChange("ar_special_companies_subtitle")}
                  className="text-dark-blue text-center max-w-sm w-full font-bold text-3xl resize-none"
                />

                <div className="w-2/6 md:w-1/6 h-0.5 bg-dark-blue mt-2"></div>
              </div>
            </div>
            {/* End Of Special Companies */}

            {/* Special Doctors */}
            <div className="bg-dark-blue rounded-sm pt-8 pb-12">
              <div className="px-2 sm:px-6 pb-8 flex flex-col items-center space-y-4">
                <input
                  id="ar_special_centers_title"
                  value={values["ar_special_centers_title"]}
                  onChange={handleChange("ar_special_centers_title")}
                  className="text-light-green text-center w-full font-semibold text-base bg-transparent"
                />

                <textarea
                  id="ar_special_centers_subtitle"
                  value={values["ar_special_centers_subtitle"]}
                  onChange={handleChange("ar_special_centers_subtitle")}
                  className="text-white text-center max-w-sm w-full font-bold text-3xl bg-transparent resize-none"
                />

                <div className="w-2/6 md:w-1/6 h-0.5 bg-white mt-2"></div>
              </div>
            </div>
            {/* End Of Special Doctors */}
            <AppSubmitButton>Save</AppSubmitButton>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditPageInfo;
