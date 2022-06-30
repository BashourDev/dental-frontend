import React, { useState } from "react";
import { MdAdd, MdDelete, MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import PlansFilterSelect from "../../components/PlanFilterSelect";
import PlansTable from "../../components/PlansTable";
import UsersFilterSelect from "../../components/UsersFilterSelect";
import UsersTable from "../../components/UsersTable";

const ManagePlans = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const handleDelete = (ids) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this plan!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! The plan has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The plan is safe!");
      }
    });
  };

  const handleDeleteMultiple = () => {
    selectedPlans.length === 0
      ? swal("Please select plans to delete", {
          icon: "info",
        })
      : handleDelete(selectedPlans);
  };

  return (
    <div className="w-full py-5">
      <div className="bg-white py-5 rounded-md shadow-sm ring-1 ring-light-gray/40 mb-4 sm:mb-5 px-1 md:px-4 flex flex-col sm:flex-row gap-y-3 w-full justify-between items-center">
        <div>
          <input
            className="rounded-l-lg py-2 px-4 outline-none border-t mr-0 border-b border-l text-gray-800 border-gray-300 bg-white"
            placeholder="search here..."
          />
          <button className="px-4 rounded-r-lg bg-light-green  text-white font-semibold py-2 uppercase border-dark-green border-t border-b border-r">
            Search
          </button>
        </div>
        <div className="flex gap-x-5">
          <PlansFilterSelect />
          <div
            className="tooltip tooltip-bottom z-20"
            data-tip="Delete Selected"
          >
            <MdDelete
              className="text-error text-3xl hover:text-error/95 cursor-pointer"
              onClick={handleDeleteMultiple}
            />
          </div>
          <div className="tooltip tooltip-bottom z-20" data-tip="Pay Selected">
            <Link to={"/admin/plans/add"}>
              <MdAdd className="text-success text-3xl hover:text-success/95 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <PlansTable
        onDelete={handleDelete}
        selectedPlans={selectedPlans}
        setSelectedPlans={setSelectedPlans}
      />
    </div>
  );
};

export default ManagePlans;
