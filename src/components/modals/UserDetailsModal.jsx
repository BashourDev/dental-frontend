import AppButton from "../controls/AppButton";
import AppModal from "./AppModal";

const UserDetailsModal = ({ isOpen, onClose, info, onPay, onDelete }) => {
  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"User Details"}>
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
          <label className="text-dark-blue text-base font-medium">
            Account Type:
          </label>
          <span className="text-dark">{info?.accountType}</span>
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
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">
            Subscription Deadline:
          </label>
          <span className="text-dark">{info?.subscriptionDeadline}</span>
        </div>
        <div className="flex space-x-2">
          <label className="text-dark-blue text-base font-medium">Bio:</label>
          <span className="text-dark">{info?.bio}</span>
        </div>
      </div>
      <div className="flex space-x-3 w-full">
        <AppButton
          className="w-full bg-success hover:bg-success/95"
          onClick={() => onPay([info?.id])}
        >
          Pay
        </AppButton>
        <AppButton
          className="w-full bg-error hover:bg-error/95"
          onClick={() => onDelete([info?.id])}
        >
          Delete
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

export default UserDetailsModal;
