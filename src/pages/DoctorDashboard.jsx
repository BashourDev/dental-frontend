import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  MdLocationOn,
  MdMail,
  MdOutlineCollections,
  MdOutlinePriceCheck,
  MdPhone,
  MdPriceChange,
  MdSubscriptions,
} from "react-icons/md";
import { FaMoneyBill, FaShekelSign } from "react-icons/fa";

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState({
    id: 1,
    name: "Bashour Atrini",
    phone: "+999 999 999 999",
    email: "bashour@bashour.com",
    bio: "",
    country: "Syria",
    city: "Homs",
    address: "main street",
  });

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 w-full px-5 md:px-10 max-w-7xl">
      <div className="space-y-5 self-center md:self-start">
        {/* mobile topbar */}
        <ul className="md:hidden menu menu-horizontal bg-white rounded-box w-full flex justify-evenly shadow-sm  border border-light-gray/50">
          <li className="w-full flex items-center justify-center">
            <NavLink
              to={"/user-dashboard/profile"}
              className={({ isActive }) =>
                `focus-within:bg-dark-blue focus-within:text-white w-full flex justify-center ${
                  isActive ? "bg-dark-blue text-white" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </NavLink>
          </li>
          <li className="w-full flex items-center justify-center">
            <NavLink
              to={"/user-dashboard/gallery"}
              className={({ isActive }) =>
                `focus-within:bg-dark-blue focus-within:text-white w-full flex justify-center ${
                  isActive ? "bg-dark-blue text-white" : ""
                }`
              }
            >
              <MdOutlineCollections className="text-xl" />
            </NavLink>
          </li>
          <li className="w-full flex items-center justify-center">
            <NavLink
              to={"/user-dashboard/plan"}
              className={({ isActive }) =>
                `focus-within:bg-dark-blue focus-within:text-white w-full flex justify-center ${
                  isActive ? "bg-dark-blue text-white" : ""
                }`
              }
            >
              <FaMoneyBill className="text-xl" />
            </NavLink>
          </li>
        </ul>
        <div className="bg-white rounded-md w-72 overflow-hidden shadow-md pb-5 space-y-3">
          <img
            src="https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg"
            alt="profile pic"
            className="w-72 h-full"
          />
          <div className="px-2">
            <h3 className="text-lg text-dark">{doctor?.name}</h3>
            <h2 className="flex text-sm title-font text-gray-500 tracking-widest">
              <MdLocationOn className="mt-0.5" /> {doctor?.country},{" "}
              {doctor?.city}, {doctor?.address}
            </h2>
          </div>
          <div className="flex flex-col px-2  text-medium-gray">
            <div className="flex items-center space-x-1">
              <MdPhone />
              <span> {doctor?.phone}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdMail />
              <span> {doctor?.email}</span>
            </div>
          </div>
        </div>
        {/* desktop sidebar */}
        <ul className="hidden md:block menu bg-white text-dark w-72 p-2 rounded-box h-fit shadow-md border border-light-gray/50">
          <li>
            <NavLink
              to={"/user-dashboard/profile"}
              className={({ isActive }) =>
                `focus-within:bg-dark-blue focus-within:text-white ${
                  isActive ? "bg-dark-blue text-white" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/user-dashboard/gallery"}
              className={({ isActive }) =>
                `focus-within:bg-dark-blue focus-within:text-white ${
                  isActive ? "bg-dark-blue text-white" : ""
                }`
              }
            >
              <MdOutlineCollections className="text-lg" />
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/user-dashboard/plan"}
              className={({ isActive }) =>
                `focus-within:bg-dark-blue focus-within:text-white ${
                  isActive ? "bg-dark-blue text-white" : ""
                }`
              }
            >
              <FaMoneyBill className="text-lg" />
              Plan
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet context={{ doctor: doctor, setDoctor: setDoctor }} />
    </div>
  );
};

export default DoctorDashboard;
