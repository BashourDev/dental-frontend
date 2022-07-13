import { useEffect } from "react";
import { useState } from "react";
import api from "../../api/api";
import RequestDetailsModal from "../../components/modals/RequestDetailsModal";
import RequestItem from "../../components/RequestItem";

const Requests = () => {
  const [requests, setRequests] = useState([]);
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
  return (
    <div className="space-y-2 py-5 max-w-xl lg:max-w-2xl xl:max-w-3xl w-full">
      {requests.map((request) => (
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
