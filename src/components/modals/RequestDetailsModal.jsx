import swal from "sweetalert";
import api from "../../api/api";
import AppButton from "../controls/AppButton";
import AppModal from "./AppModal";

const RequestDetailsModal = ({ isOpen, onClose, info, setRequests }) => {
  const handleActivate = async () => {
    await api.put(`/admin/users/${info?.id}/activate`);
    setRequests((old) => old.filter((o) => o.id !== info.id));

    swal("The request has been accepted!", {
      icon: "success",
    });
    onClose();
  };

  const handleReject = async () => {
    await api.post(`/admin/users/delete`, { ids: [info.id] });
    setRequests((old) => old.filter((o) => o.id !== info.id));

    swal("The request has been rejected!", {
      icon: "success",
    });
    onClose();
  };

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Reqeust Details"}>
      <div className="space-y-4 py-4">
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">Type:</label>
          <span className="text-dark">
            {info?.type === 1 ? "Doctor" : "Company"}
          </span>
        </div>
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">Plan:</label>
          <span className="text-dark">
            {info?.plan.en_name} ({info?.subscription_period} mo.)
          </span>
        </div>
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">
            Phone Number:
          </label>
          <span className="text-dark">{info?.phone}</span>
        </div>
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">Email:</label>
          <span className="text-dark">{info?.email}</span>
        </div>

        <div className="ring-2 ring-dark-blue/70 rounded-md p-3 space-y-3">
          <h2 className="text-dark-blue text-lg font-semibold">English Info</h2>
          <div className="flex space-x-2">
            <label className="text-dark-blue text-base font-medium">
              Name:
            </label>
            <span className="text-dark">{info?.en_name}</span>
          </div>
          <div className="flex space-x-2">
            <label className="text-dark-blue text-base font-medium">
              Location:
            </label>
            <span className="text-dark">
              {info?.en_country}, {info?.en_city}, {info?.en_address}
            </span>
          </div>

          <div className="flex space-x-2">
            <label className="text-dark-blue text-base font-medium">Bio:</label>
            <span className="text-dark">{info?.en_bio}</span>
          </div>
        </div>

        <div
          dir="rtl"
          className="ring-2 ring-dark-blue/70 rounded-md p-3 space-y-3"
        >
          <h2 className="text-dark-blue text-lg font-semibold">Arabic Info</h2>
          <div className="flex space-x-2">
            <label className="text-dark-blue text-base font-medium">
              الاسم:
            </label>
            <span className="text-dark">{info?.ar_name}</span>
          </div>
          <div className="flex space-x-2">
            <label className="text-dark-blue text-base font-medium">
              العنوان:
            </label>
            <span className="text-dark">
              {info?.ar_country}, {info?.ar_city}, {info?.ar_address}
            </span>
          </div>

          <div className="flex space-x-2">
            <label className="text-dark-blue text-base font-medium">
              عن المستخدم:
            </label>
            <span className="text-dark">{info?.ar_bio}</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-3 w-full">
        <AppButton
          className="w-full bg-dark-blue hover:bg-dark-blue/95"
          onClick={handleActivate}
        >
          Accept
        </AppButton>
        <AppButton
          className="w-full bg-danger hover:bg-danger/95"
          onClick={handleReject}
        >
          Reject
        </AppButton>
        <AppButton
          className="w-full bg-medium-gray hover:bg-medium-gray/95"
          onClick={() => onClose()}
        >
          Close
        </AppButton>
      </div>
    </AppModal>
  );
};

export default RequestDetailsModal;
