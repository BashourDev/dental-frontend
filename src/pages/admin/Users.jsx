import React from "react";
import UsersTable from "../../components/UsersTable";

const Users = () => {
  return (
    <div className="w-full py-5">
      <div class="mb-4 sm:mb-4 flex w-full justify-center">
        <input
          className="rounded-l-lg py-2 px-4 outline-none border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="search here..."
        />
        <button className="px-4 rounded-r-lg bg-light-green  text-white font-semibold py-4 uppercase border-dark-green border-t border-b border-r">
          Search
        </button>
      </div>
      <UsersTable />
    </div>
  );
};

export default Users;
