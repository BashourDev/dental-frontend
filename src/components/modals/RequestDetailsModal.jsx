import AppButton from "../controls/AppButton";
import AppModal from "./AppModal";

const RequestDetailsModal = ({ isOpen, onClose, info }) => {
  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Reqeust Details"}>
      <div className="space-y-4 py-4">
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">Name:</label>
          <span className="text-dark">{info?.name}</span>
        </div>
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">
            Location:
          </label>
          <span className="text-dark">
            {info?.country}, {info?.city}, {info?.address}
          </span>
        </div>
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">Type:</label>
          <span className="text-dark">{info?.type}</span>
        </div>
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">Bio:</label>
          <span className="text-dark">{info?.bio}</span>
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
      </div>
      <div className="flex space-x-3 w-full">
        <AppButton className="w-full bg-dark-blue hover:bg-dark-blue/95">
          Accept
        </AppButton>
        <AppButton className="w-full bg-danger hover:bg-danger/95">
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
