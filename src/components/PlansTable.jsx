import React, { useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import UserDetailsModal from "./modals/UserDetailsModal";

const PlansTable = ({ onDelete, selectedPlans, setSelectedPlans }) => {
  const [plans, setPlans] = useState([
    {
      name: "Padawan",
      price: 20,
      users_count: 44,
      is_active: true,
      properties: [
        {
          id: 1,
          name: "something good 1",
        },
        {
          id: 2,
          name: "something good 2",
        },
        {
          id: 3,
          name: "something good 3",
        },
      ],
    },
    {
      name: "Jedi Knight",
      price: 50,
      users_count: 48,
      is_active: false,
      properties: [
        {
          id: 1,
          name: "something good 1",
        },
        {
          id: 2,
          name: "something good 2",
        },
        {
          id: 3,
          name: "something good 3",
        },
        {
          id: 4,
          name: "something good 4",
        },
      ],
    },
    {
      name: "Jedi Master",
      price: 80,
      users_count: 67,
      is_active: true,
      properties: [
        {
          id: 1,
          name: "something good 1",
        },
        {
          id: 2,
          name: "something good 2",
        },
        {
          id: 3,
          name: "something good 3",
        },
        {
          id: 4,
          name: "something good 4",
        },
        {
          id: 5,
          name: "something good 5",
        },
        {
          id: 6,
          name: "something good 6",
        },
        {
          id: 7,
          name: "something good 7",
        },
      ],
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
      setSelectedPlans((old) => [...old, id]);
    } else {
      setSelectedPlans((old) => old.filter((o) => o !== id));
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
            <th>Price</th>
            <th>Active</th>
            <th>NO. Users</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {plans.map((plan) => (
            <tr key={plan?.id}>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) => handleSelect(plan?.id, e.target.checked)}
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{plan?.name}</div>
                    <div className="text-sm opacity-50">
                      {/* some thing about it */}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {plan?.price}
                <br />
                {/* <span className="badge badge-ghost badge-sm">
                  the current price is {plan?.price}
                </span> */}
              </td>
              <td>
                {plan?.is_active ? (
                  <MdCheckCircle className="text-success text-2xl" />
                ) : (
                  <MdCancel className="text-error text-2xl" />
                )}
              </td>
              <td>{plan?.users_count}</td>
              <th>
                <Link
                  className="btn btn-warning btn-xs"
                  to={`/admin/plans/edit/${plan?.id}`}
                >
                  edit
                </Link>
              </th>
              <th>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => onDelete([plan?.id])}
                >
                  delete
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
            <th>Price</th>
            <th>Active</th>
            <th>No. Users</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      {/* <UserDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        info={selectedUser}
        onPay={onPay}
        onDelete={onDelete}
      /> */}
    </div>
  );
};

export default PlansTable;
