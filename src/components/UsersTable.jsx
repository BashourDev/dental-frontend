import React from "react";
import {
  MdCancel,
  MdCheckCircle,
  MdClose,
  MdOutlineClose,
} from "react-icons/md";

const UsersTable = () => {
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
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
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
                  <div className="font-bold">Bashour Atrini</div>
                  <div className="text-sm opacity-50">Syria, Homs</div>
                </div>
              </div>
            </td>
            <td>
              Dentist
              <br />
              <span className="badge badge-ghost badge-sm">
                he is a dentist
              </span>
            </td>
            <td>
              <MdCheckCircle className="text-success text-2xl" />
            </td>
            <td>+999 999 999 999</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          {/* <!-- row 2 --> */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
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
                  <div className="font-bold">Bashour Atrini 2</div>
                  <div className="text-sm opacity-50">Lebanon, Junieh</div>
                </div>
              </div>
            </td>
            <td>
              Company
              <br />
              <span className="badge badge-ghost badge-sm">
                they are a company
              </span>
            </td>
            <td>
              <MdCancel className="text-error text-2xl" />
            </td>
            <td>+999 999 999 999</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
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
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UsersTable;
