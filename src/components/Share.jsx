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
      <div className="flex flex-col justify-center items-start bg-white rounded-[13px] w-[80%] lg:h-[70vh] lg:w-[50vw] xl:h-[60vh] xl:w-[30vw]  pb-2">
        <div className="absolute right-[15%] top-4 md:right-[20%] md:top-6 lg:right-[2%] lg:top-3">
          <button onClick={() => closeModal(false)}>
            <img src={Close} className="w-[4vw] md:w-[3vw] xl:w-[1.5vw]" />
          </button>
        </div>
        <p className="font-inter font-bold text-[5vw] mt-[3vh] ml-[5vw] md:text-[4vw] lg:text-[2.5vw] xl:text-[2vw] lg:ml-10 lg:mt-[7vh] xl:-mt-[1rem] xl:ml-[1vw]">
          Share Form as:
        </p>
        <div className="flex flex-col justify-start mt-[2vh] ml-[3vw] xl:ml-3">
          <label className="w-[75vw] md:w-[62vw] ">
            <input
              type="radio"
              value="public"
              name="form"
              className="mr-[2vw] w-[3vw] h-[3vw] md:w-[2vw] md:h-[2vh] lg:w-[2vw] lg:h-[2vh] lg:ml-[2vw] xl:h-[3vh] xl:w-[3vw] xl:ml-0 xl:mr-2"
            />
            <span className="text-[4.5vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] font-semibold">
              Public Form
            </span>
            <p className="text-[3.5vw] md:text-[2.5vw] ml-[6vw] lg:ml-[9vw] lg:w-[50%] lg:text-[1.5vw] xl:text-[0.8vw] xl:ml-16 xl:w-[40%]">
              Public forms will be shown at Home Menu but still can be find by
              entering Token number.
            </p>
          </label>
          <label>
            <input
              type="radio"
              value="private"
              name="form"
              className="mr-[2vw] w-[3vw] h-[3vw] md:w-[2vw] md:h-[2vh] lg:w-[2vw] lg:h-[2vh] lg:ml-[2vw] xl:h-[3vh] xl:w-[3vw] xl:ml-0 xl:mr-2"
              checked
            />
            <span className="text-[4.5vw] md:text-[3vw] font-semibold lg:text-[2vw] xl:text-[1.5vw]">
              Private Form
            </span>
            <p className="text-[3.5vw] md:text-[2.5vw] ml-[6vw] lg:text-[1.5vw] lg:w-[50%] lg:ml-[9vw] xl:text-[0.8vw] xl:ml-16 xl:w-[40%]">
              Private forms will not be shown at Home Menu, instead user can
              find it by entering Token number by sharing it
            </p>
          </label>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-end mt-5">
          <div class="w-[60vw] lg:w-[40vw] bg-[#d9d9d9] rounded-full py-[1vw] flex items-center lg:h-[10vh] xl:w-[27vw] xl:h-[7vh]">
            <img
              src={Clock}
              className="p-[1vw] bg-white rounded-full ml-2 w-[15%] h-[15%]  lg:w-[50px] lg:h-[50px] lg:ml-[15px] xl:w-[45px] xl:h-[45px] xl:p-[0.5vw]"
            />
            <div class="w-[60%] ml-[4%] ">
              <select
                id="share-period"
                className="text-[3vw] md:text-[2.5vw] w-[100%] lg:text-[2vw] xl:text-[1vw] xl:w-[60%] lg:w-[80%] bg-[#D9D9D9]"
              >
                <option
                  value="oneweek"
                  selected
                  className="lg:text-[1vw] xl:text-[0.7vw]"
                >
                  One Week
                </option>
                <option
                  value="24hours"
                  className="lg:text-[1vw] xl:text-[0.7vw]"
                >
                  24 hours
                </option>
              </select>
              <p className="text-[2vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.5vw]">
                This form will be expired in One week
              </p>
            </div>
          </div>
          <Link to={"/making-token"}>
            <div className="lg:w-[50vw] w-[80vw] xl:w-[28vw]">
              <div className="w-[95%] flex justify-end mb-4">
                <button
                  id="rollButton"
                  className="w-[15vw] bg-[#d9d9d9] mt-5 text-[1.6vw] rounded-lg active:bg-slate-500 py-[1vw] lg:w-[12vw] xl:text-[1vw] xl:w-[6  vw]"
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
