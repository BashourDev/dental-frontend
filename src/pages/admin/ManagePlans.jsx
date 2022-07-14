import React, { useState } from "react";
import { useEffect } from "react";
import { MdAdd, MdDelete, MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import api from "../../api/api";
import PlansFilterSelect from "../../components/PlanFilterSelect";
import PlansTable from "../../components/PlansTable";
import UsersFilterSelect from "../../components/UsersFilterSelect";
import UsersTable from "../../components/UsersTable";

const options = [
  { name: "All", type: 0 },
  { name: "Dentists", type: 1 },
  { name: "Companies", type: 2 },
];

const ManagePlans = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(options[0]);

  const getPlans = async () => {
    const res = await api.get(`/plans?type=${selectedFilter.type}`);
    setPlans(res.data);
  };

  useEffect(() => {
    getPlans();
  }, [selectedFilter]);

  const handleDelete = (ids) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this plan!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await api.post("/plans/delete", { ids: ids });
        setPlans((old) => old.filter((o) => !ids.includes(o.id)));
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

    setSelectedPlans([]);
  };

  return (
    <div className="w-full py-5">
      <div className="bg-white py-5 rounded-md shadow-sm ring-1 ring-light-gray/40 mb-4 sm:mb-5 px-1 md:px-4 flex flex-col sm:flex-row gap-y-3 w-full justify-between items-center">
        <div></div>
        <div className="flex gap-x-5">
          <PlansFilterSelect
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
          <div className="tooltip tooltip-bottom z-20" data-tip="Add Plan">
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
        plans={plans}
        setPlans={setPlans}
      />
    </div>
  );
};

export default ManagePlans;
