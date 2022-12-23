import React, { useState } from "react";
import Close from "../img/close.svg";
import Clock from "../img/clock.png";
import { Link } from "react-router-dom";

export default function Share({ closeModal }) {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-start bg-white rounded-[13px] w-[80%] lg:h-[40vw] pb-2">
        <div className="absolute right-[15%] top-4 md:right-[20%] md:top-6 lg:right-[12%] lg:top-3">
          <button onClick={() => closeModal(false)}>
            <img src={Close} className="w-[4vw] md:w-[2.5vw] " />
          </button>
        </div>
        <p className="font-inter font-bold text-[5vw] mt-[3vh] ml-[5vw] md:text-[4vw] lg:text-[2.5vw] lg:ml-10">
          Share Form as:
        </p>
        <div className="flex flex-col justify-start mt-[2vh] ml-[3vw]">
          <label className="w-[75vw] md:w-[62vw] lg:w-[30vw]">
            <input
              type="radio"
              value="public"
              name="form"
              className="mr-[2vw] w-[3vw] h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] lg:ml-[3vw]"
            />
            <span className="text-[4.5vw] md:text-[3vw] lg:text-[2vw]">
              Public Form
            </span>
            <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[1vw] ml-[6vw] lg:ml-[9vw] lg:w-[100%]">
              Public forms will be shown at Home Menu but still can be find by
              entering Token number.
            </p>
          </label>
          <label>
            <input
              type="radio"
              value="private"
              name="form"
              className="mr-[2vw] w-[3vw] h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] lg:ml-[3vw]"
              checked
            />
            <span className="text-[4.5vw] md:text-[3vw] lg:text-[2vw]">
              Private Form
            </span>
            <p className="text-[3.5vw] md:text-[2.5vw] lg:text-[1vw] ml-[6vw] lg:ml-[9vw] lg:w-[62.5%]">
              Private forms will not be shown at Home Menu, instead user can
              find it by entering Token number by sharing it
            </p>
          </label>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-end mt-5">
          <div class="w-[60vw] lg:w-[50vw] bg-[#EBEBEB] rounded-full py-[1vw] flex items-center">
            <img
              src={Clock}
              className="p-[1.5vw] bg-white rounded-full ml-2 w-[15%] h-[15%] lg:w-[6vw] lg:h-[6vw]"
            />
            <div class="w-[60%] ml-[4%] ">
              <select
                id="share-period"
                className="text-[3vw] md:text-[2.5vw] lg:text-[2vw] w-[60%]  bg-[#D9D9D9] flex flex-col justify-center items-start"
              >
                <option value="oneweek" selected className="lg:text-[1vw]">
                  One Week
                </option>
                <option value="24hours" className="lg:text-[1vw]">
                  24 hours
                </option>
              </select>
              <p className="text-[2vw] md:text-[1.5vw]">
                This form will be expired in One week
              </p>
            </div>
          </div>
          <Link to={"/making-token"}>
            <div className="lg:w-[50vw] w-[80vw]">
              <div className="w-[95%] flex justify-end mb-4">
                <button
                  id="rollButton"
                  className="w-[15vw] bg-[#d9d9d9] mt-5 text-[1.6vw] rounded-lg active:bg-slate-500 py-[1vw]"
                >
                  Share Form
                </button>
                {/* <script src="./index.js"></script> */}
              </div>
            </div>
          </Link>
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
