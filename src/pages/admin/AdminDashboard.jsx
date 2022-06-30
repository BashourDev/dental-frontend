import React from "react";
import { FaMoneyBill, FaUsers } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="w-full max-w-6xl">
      <ul className="menu menu-horizontal bg-white rounded-box w-full flex justify-evenly shadow-sm  border border-light-gray/50">
        <li className="w-full flex items-center justify-center">
          <NavLink
            to={"/admin/users"}
            className={({ isActive }) =>
              `focus-within:bg-dark-blue focus-within:text-white w-full flex justify-center ${
                isActive ? "bg-dark-blue text-white" : ""
              }`
            }
          >
            <FaUsers className="text-xl" />
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-center">
          <NavLink
            to={"/admin/requests"}
            className={({ isActive }) =>
              `focus-within:bg-dark-blue focus-within:text-white w-full flex justify-center ${
                isActive ? "bg-dark-blue text-white" : ""
              }`
            }
          >
            <MdNotifications className="text-xl" />
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-center">
          <NavLink
            to={"/admin/plans"}
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
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
