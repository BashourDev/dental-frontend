import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import AppButton from "./controls/AppButton";

const UserGalleryPreviewItem = ({
  id,
  before,
  after,
  description,
  onEdit,
  onRemove,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white max-w-[22rem] py-4 px-2 md:px-4 shadow-sm rounded border border-light-gray/30">
        <div className="flex gap-x-2">
          <div className="text-dark">
            <h3>Before</h3>
            <img
              className="rounded overflow-hidden max-h-[12rem] max-w-[10rem]"
              alt="before"
              src={before}
            />
          </div>
          <div className="text-dark">
            <h3>After</h3>
            <img
              className="rounded overflow-hidden max-h-[12rem] max-w-[10rem]"
              alt="after"
              src={after}
            />
          </div>
        </div>
        <p className="text-medium-gray pt-2">
          <span className="text-dark-blue font-semibold">Description:</span>{" "}
          {description}
        </p>
        <div className="divider"></div>
        <div className="flex items-center w-full justify-evenly">
          <AppButton Icon={MdEdit} className="w-28" onClick={() => onEdit(id)}>
            Edit
          </AppButton>
          <AppButton
            Icon={MdDelete}
            className="w-28 bg-danger hover:bg-danger/90"
            onClick={() => onRemove(id)}
          >
            Remove
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default UserGalleryPreviewItem;
