import React, { useState } from "react";
import Delete from "../img/delete.svg";
import DeleteFormWarning from "./DeleteFormWarning";

export default function ReportThumbnail() {
  const [openmodal, setOpenModal] = useState(false);

  return (
    <body className="bg-[#F1F1F1] w-[90vw] h-max rounded-[9px] mb-4 shadow-[0_3.29px_3.29px_rgba(0,0,0,0.25)]">
      <div className="flex flex-row justify-between">
        <div className="ml-[10px] mt-[9px]">
          <h1 className="text-[6.25vw] font-semibold">
            Lorem ipsum dolor sit.
          </h1>
          <div className="w-[70vw] h-[7.5vh] mt-[3px] font-[400]">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="mr-[20px] mt-[17px]">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img src={Delete} className="w-[16px] h-[18px]" />
          </button>
          {openmodal && (
            <div className="bg-[#0000004a] fixed top left-0 right-0 bottom-0 w-[100vw] h-[100vh] flex justify-center items-center">
              <div className="">
                <DeleteFormWarning closeModal={setOpenModal} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end font-[500] mr-4 pb-1">
        <p>Expire in : xx.xx</p>
      </div>
    </body>
  );
}
