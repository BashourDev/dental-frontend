import React, { useEffect, useState } from "react";
import { MdCircle, MdDelete, MdPayment } from "react-icons/md";
import swal from "sweetalert";
import api from "../../api/api";
import { setUser } from "../../api/user";
import UsersFilterSelect from "../../components/UsersFilterSelect";
import UsersTable from "../../components/UsersTable";

const options = [
  { name: "All" },
  { name: "Subscribed" },
  { name: "Not Subscribed" },
];

const Users = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(options[0]);
  const [unsubscribedUsersCount, setUnsubscribedUsersCount] = useState(0);

  const getUsers = async () => {
    const res = await api.get(
      `/admin/users?name=${search}&filter=${selectedFilter.name}`
    );
    setUsers(res.data);
  };

  const getUnsubscribedUsersCount = async () => {
    const res = await api.get(`/admin/users/unsubscribed`);
    setUnsubscribedUsersCount(res.data);
  };

  useEffect(() => {
    getUsers();
  }, [selectedFilter]);

  useEffect(() => {
    getUnsubscribedUsersCount();
  }, [users]);

  const handlePay = (ids) => {
    swal({
      title: "Are you sure?",
      text: "Renew this user's subscription",
      icon: "info",
      buttons: true,
      dangerMode: false,
    }).then(async (willDelete) => {
      if (willDelete) {
        await api.put("/admin/users/pay", { ids: ids });
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
    }).then(async (willDelete) => {
      if (willDelete) {
        await api.post("/admin/users/delete", { ids: ids });
        setUsers((old) => old.filter((o) => !ids.includes(o.id)));

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

    setSelectedUsers([]);
  };

  const handlePayMultiple = () => {
    selectedUsers.length === 0
      ? swal("Please select users to renew subscription for", {
          icon: "info",
        })
      : handlePay(selectedUsers);

    setSelectedUsers([]);
  };

  const handleSearch = () => {
    getUsers();
  };

  return (
    <div className="w-full py-5">
      <div className="bg-white py-5 rounded-md shadow-sm ring-1 ring-light-gray/40 mb-4 sm:mb-5 px-1 md:px-4 flex flex-col sm:flex-row gap-y-3 w-full justify-between items-center">
        <div>
          <input
            className="rounded-l-lg py-2 px-4 outline-none border-t mr-0 border-b border-l text-gray-800 border-gray-300 bg-white"
            placeholder="search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="px-4 rounded-r-lg bg-light-green  text-white font-semibold py-2 uppercase border-dark-green border-t border-b border-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {unsubscribedUsersCount === 0 ? null : (
          <div className="flex items-center justify-center">
            <MdCircle className="text-lg text-error" />
            {unsubscribedUsersCount === 1 ? (
              <span>there is {unsubscribedUsersCount} unsubscribed user</span>
            ) : (
              <span>there are {unsubscribedUsersCount} unsubscribed users</span>
            )}
          </div>
        )}
        <div className="flex gap-x-5">
          <UsersFilterSelect
            options={options}
            selected={selectedFilter}
            setSelected={setSelectedFilter}
          />
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
        users={users}
        setUsers={setUsers}
        filter={selectedFilter}
      />
    </div>
  );
};

export default Users;
