import React, { useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import swal from "sweetalert";
import UserDetailsModal from "./modals/UserDetailsModal";

const UsersTable = ({ onPay, onDelete, selectedUsers, setSelectedUsers }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Bashour Atrini",
      accountType: "Dentist",
      isPaied: true,
      country: "Syria",
      city: "Homs",
      phone: "+999 999 999 999",
      subscriptionDeadline: new Date().toLocaleString(),
    },
    {
      id: 2,
      name: "Bashour Atrini 2",
      accountType: "Company",
      isPaied: false,
      country: "Lebanon",
      city: "Junieh",
      phone: "+999 999 999 999",
      subscriptionDeadline: new Date().toLocaleString(),
    },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.name}</div>
                    <div className="text-sm opacity-50">
                      {user?.country}, {user?.city}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {user?.accountType}
                <br />
                <span className="badge badge-ghost badge-sm">
                  they are a {user?.accountType}
                </span>
              </td>
              <td>
                {user?.isPaied ? (
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
    </div>
  );
};

export default UsersTable;
