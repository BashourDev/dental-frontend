import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import api from "../../api/api";
import ChangePlanRequestItem from "../../components/ChangePlanRequestItem";
import RequestDetailsModal from "../../components/modals/RequestDetailsModal";
import RequestItem from "../../components/RequestItem";

const Requests = () => {
  const [requests, setRequests] = useState({ new_users: [], change_plan: [] });
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const getRequests = async () => {
    const res = await api.get("/admin/users/requests");
    setRequests(res.data);
  };

  useEffect(() => {
    getRequests();
  }, []);

  const handleShowDetails = (req) => {
    setSelectedRequest(req);
    setIsDetailsOpen(true);
  };

  const handleAcceptChangePlan = async (id) => {
    await api.post(`/admin/users/change-plan/${id}`);
    setRequests((old) => ({
      ...old,
      change_plan: old.change_plan.filter((o) => o.id !== id),
    }));
    swal("The Request has been Accepted!", {
      icon: "success",
    });
  };

  const handleRejectChangePlan = async (id) => {
    await api.delete(`/admin/users/reject-change-plan/${id}`);
    setRequests((old) => ({
      ...old,
      change_plan: old.change_plan.filter((o) => o.id !== id),
    }));
    swal("The Request has been Rejected!", {
      icon: "success",
    });
  };

  return (
    <div className="space-y-2 py-5 max-w-xl lg:max-w-2xl xl:max-w-3xl w-full">
      {requests.change_plan.map((request) => (
        <ChangePlanRequestItem
          key={request.id}
          id={request.id}
          name={request?.user?.en_name}
          country={request?.user?.en_country}
          city={request?.user?.en_city}
          address={request?.user?.en_address}
          photo={request?.user?.first_media_only?.original_url}
          plan={request?.plan}
          subscription_period={request?.subscription_period}
          handleAcceptChangePlan={handleAcceptChangePlan}
          handleRejectChangePlan={handleRejectChangePlan}
        />
      ))}

      {requests.new_users.map((request) => (
        <RequestItem
          key={request.id}
          name={request?.en_name}
          country={request?.en_country}
          city={request?.en_city}
          address={request?.en_address}
          photo={request?.first_media_only?.original_url}
          onShowDetails={() => handleShowDetails(request)}
        />
      ))}
      <RequestDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        info={selectedRequest}
        setRequests={setRequests}
      />
    </div>
  );
};

export default Requests;
