import { useState } from "react";
import RequestDetailsModal from "../../components/modals/RequestDetailsModal";
import RequestItem from "../../components/RequestItem";

const Requests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Bashour Atrini",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Doctor",
    },
    {
      id: 2,
      name: "Bashour Atrini 2",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Company",
    },
    {
      id: 3,
      name: "Bashour Atrini 3",
      country: "Syria",
      city: "Homs",
      address: "Al-Qalatiah main street",
      bio: "something about myself which is supposed to be a long long long text and this is just for testing",
      phone: "+963943432432",
      email: "some@email.com",
      type: "Doctor",
    },
  ]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleShowDetails = (req) => {
    setSelectedRequest(req);
    setIsDetailsOpen(true);
  };
  return (
    <div className="space-y-2 py-5 max-w-xl lg:max-w-2xl xl:max-w-3xl w-full">
      {requests.map((request) => (
        <RequestItem
          key={request.id}
          name={request?.name}
          country={request?.country}
          city={request?.city}
          address={request?.address}
          onShowDetails={() => handleShowDetails(request)}
        />
      ))}
      <RequestDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        info={selectedRequest}
      />
    </div>
  );
};

export default Requests;
