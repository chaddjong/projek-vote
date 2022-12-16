import React, { useState } from "react";
import Close from "../img/close.svg";

export default function Share() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="relative">
      <div className="absolute right-7 top-4">
        <button onClick={toggleModal}>
          <img src={Close} className="w-[4vw]" />
        </button>
      </div>
      <div className="flex flex-col justify-start">
        <p className="font-inter font-bold text-[5vw] mt-[3vh] ml-[5vw]">
          Share Form as:
        </p>
        <div className="flex flex-col justify-start mt-[2vh] ml-[5vw]">
          <label className="w-[80vw]">
            <input
              type="radio"
              value="public"
              name="form"
              className="mr-[2vw]"
            />
            <span>Public Form</span>
            <p>
              Public forms will be shown at Home Menu but still can be find by
              entering Token number.
            </p>
          </label>
          <label>
            <input
              type="radio"
              value="private"
              name="form"
              className="mr-[2vw]"
              checked
            />
            <span>Private Form</span>
          </label>
        </div>
      </div>
    </div>
    // <div className="absolute h-[100vh] w-[100%] flex flex-col justify-center items-center z-10">
    //   <div class="bg-white h-auto w-[25%] rounded-lg pb-10">
    //     <p class="text-2xl text-black font-inter m-5 mt-8 ">Share Form as:</p>
    //     <label class="inline-flex items-start w-[95%]">
    //       <input type="checkbox" class="w-5 h-5 shadow ml-12" />
    //       <span class="ml-7 text-black text-[18px] font-inter">
    //         Public Form <br />
    //         <p class="font-inter text-[10px] text-black opacity-80">
    //           Public forms will be shown at Home Menu but still can be find by
    //           entering Token number.
    //         </p>
    //       </span>
    //     </label>
    //     <label class="inline-flex items-start w-[95%] mt-4">
    //       <input type="checkbox" class="w-5 h-5 shadow ml-12" />
    //       <span class="ml-7 text-black text-[18px] font-inter">
    //         Private Form <br />
    //         <p class="font-inter text-[10px] text-black opacity-80">
    //           Private forms will not be shown at Home Menu, instead user can
    //           find it by entering Token number by sharing it
    //         </p>
    //       </span>
    //     </label>
    //     <div class="h-auto w-[100%]  flex justify-end items-center">
    //       <button class="bg-[#d9d9d9] h-auto w-[30%] mr-8 mt-7 rounded-xl p-1 py-2">
    //         Share Form
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
