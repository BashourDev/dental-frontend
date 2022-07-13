import React, { useEffect, useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import swal from "sweetalert";
import api from "../api/api";
import UserDetailsModal from "./modals/UserDetailsModal";
import UserEditModal from "./modals/UserEditModal";

const UsersTable = ({
  onPay,
  onDelete,
  selectedUsers,
  setSelectedUsers,
  users,
  setUsers,
  filter,
}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDetails = (user) => {
    setSelectedUser(user);
    setIsDetailsOpen(true);
  };

  const handleSelect = (id, value) => {
    if (value) {
      setSelectedUsers((old) => [...old, id]);
    } else {
      setSelectedUsers((old) => old.filter((o) => o !== id));
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditOpen(true);
  };

  return (
    <div className="overflow-x-auto w-full shadow-sm ring-1 ring-light-gray/50 rounded-md">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                {/* <input type="checkbox" className="checkbox" /> */}
              </label>
            </th>
            <th>Name</th>
            <th>Account Type</th>
            <th>Paied</th>
            <th>Phone</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {users.map((user) => (
            <tr key={user?.id}>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) => handleSelect(user?.id, e.target.checked)}
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user?.first_media_only?.original_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.en_name}</div>
                    <div className="text-sm opacity-50">
                      {user?.een_country}, {user?.en_city}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {user?.type === 1 ? "Dentist" : "Company"}
                <br />
                <span className="badge badge-ghost badge-sm">
                  they are a {user?.type === 1 ? "Dentist" : "Company"}
                </span>
              </td>
              <td>
                {new Date(user?.subscription_deadline) > new Date() ? (
                  <MdCheckCircle className="text-success text-2xl" />
                ) : (
                  <MdCancel className="text-error text-2xl" />
                )}
              </td>
              <td>{user?.phone}</td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleDetails(user)}
                >
                  details
                </button>
              </th>
              <th>
                <button
                  className="btn btn-warning btn-xs"
                  onClick={() => handleEdit(user)}
                >
                  edit
                </button>
              </th>
              <th>
                <button
                  className="btn btn-success btn-xs"
                  onClick={() => onPay([user?.id])}
                >
                  pay
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* <!-- foot --> */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Account Type</th>
            <th>Paied</th>
            <th>Phone</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <UserDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        info={selectedUser}
        onPay={onPay}
        onDelete={onDelete}
      />

      <UserEditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        info={selectedUser}
      />
    </div>
  );
};

export default UsersTable;
