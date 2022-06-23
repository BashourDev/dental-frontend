import React, { useState } from "react";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import Loading from "../components/Loading";

const CompanyGeneralInfo = () => {
  const [company, setCompany] = useState({
    id: 1,
    name: "Bashour Atrini",
    country: "Syria",
    city: "Homs",
    address: "main street",
    phone: "+999 999 999 999",
    email: "something@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, sint quod quo non magnam nisi, dolor commodi dicta illum earum, animi beatae culpa ea eos qui nulla natus. Illo, perferendis?",
    first_media_only: {
      name: "blah",
      original_url:
        "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white max-w-6xl">
        <div className="container px-5 py-24 mx-auto">
          {isLoading && <Loading />}
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="space-y-2">
              <img
                alt={company?.first_media_only?.name}
                className="h-52 max-w-xs xl:max-w-sm 2xl:max-w-md object-cover object-center rounded border border-gray-200"
                src={company?.first_media_only?.original_url}
              />
              <div className="flex flex-col space-x-3 items-center text-medium-gray">
                <div className="flex items-center">
                  <MdPhone />
                  <span>{company?.phone}</span>
                </div>
                <div className="flex items-center">
                  <MdMail />
                  <span>{company?.email}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-6 md:mt-0 space-y-3">
              <h2 className="flex text-sm title-font text-gray-500 tracking-widest">
                <MdLocationOn className="mt-0.5" /> {company?.country},{" "}
                {company?.city}, {company?.address}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {company?.name}
              </h1>

              <p className="leading-relaxed">{company?.bio}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyGeneralInfo;
