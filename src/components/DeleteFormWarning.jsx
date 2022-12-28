import React, { useState } from "react";
import Close from "../img/close.svg";

export default function DeleteFormWarning({ closeModal }) {
  // const [modal, setModal] = useState(true);

  return (
    <div className="flex flex-col bg-white w-[90vw] h-max rounded-[11px]">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-[5.5vw] mt-[12px] ml-[11px] mb-[15px]">
          Delete form and all data?
        </h1>
        <div className="mt-[10px] mr-[11px]">
          <button onClick={() => closeModal(false)}>
            <img src={Close} className="w-[4vw]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center ml-[13px] text-xs mr-[13px]">
        <p className="mb-[8px]">Form and all of the data will be deleted and can no longer be accesed or recover once you delete it.</p>
        <p>Are you sure want to permanently delete <span className="text-[#2A67DC]">Lorem ipsum dolor sit amet </span>?</p>
      </div>
      <div className="flex justify-end gap-[10px] my-[12px] mr-[10px] text-xs">
        <button onClick={() => closeModal(false)} className="bg-[#F6F6F6] py-1 px-2 rounded-[4px]">Cancel</button>
        <button className="bg-[#2A67DC] py-1 px-4 rounded-[4px] text-white">Yes, Delete it</button>
      </div>
    </div>
  );
}
