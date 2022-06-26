import React, { useState } from "react";
import { MdDelete, MdPayment } from "react-icons/md";
import swal from "sweetalert";
import UsersFilterSelect from "../../components/UsersFilterSelect";
import UsersTable from "../../components/UsersTable";

const Users = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handlePay = (id) => {
    swal({
      title: "Are you sure?",
      text: "Renew this user's subscription",
      icon: "info",
      buttons: true,
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        swal("the user's subscription has been renewed successfully", {
          icon: "success",
        });
      } else {
        swal("Nothing has changed");
      }
    });
  };

  const handleDelete = (ids) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! The user has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The user is safe!");
      }
    });
  };

  const handleDeleteMultiple = () => {
    selectedUsers.length === 0
      ? swal("Please select users to delete", {
          icon: "info",
        })
      : handleDelete(selectedUsers);
  };

  const handlePayMultiple = () => {
    selectedUsers.length === 0
      ? swal("Please select users to renew subscription for", {
          icon: "info",
        })
      : handlePay(selectedUsers);
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
          <UsersFilterSelect />
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
            <MdPayment
              className="text-success text-3xl hover:text-success/95 cursor-pointer"
              onClick={handlePayMultiple}
            />
          </div>
        </div>
      </div>
      <UsersTable
        onPay={handlePay}
        onDelete={handleDelete}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
      />
    </div>
  );
};

export default Users;
