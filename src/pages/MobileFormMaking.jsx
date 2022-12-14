import React from "react";
import QuestionCard from "../components/QuestionCard";
import BackArrow from "../img/arrow_back.svg";
import Add from "../img/add.svg";
import NextArrow from "../img/arrow_forward.svg";
// import '../bgform.css';

function MobileFormMaking() {
  return (
    <body className="bg-[#D9D9D9] h-[100%] pb-4">
      <div className="flex justify-end items-end w-[100%] h-[100%] fixed z-10 p-10">
        <button className="bg-[#EBEBEB] p-5 rounded-full shadow-[0_1.5px_7.3px_3.3px_rgba(0,0,0,0.25)]">
          <img src={NextArrow} />
        </button>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center w-full gap-5">
          <div className="flex flex-col bg-white w-full h-44 rounded-b-2xl">
            <div>
              <button className="w-[30px] h-[30px] mt-[40px] ml-4">
                <img src={BackArrow} />
              </button>
            </div>
            <div className="mt-5 ml-5">
              <input
                placeholder="Untitled form"
                className="text-black placeholder:text-black placeholder:font-normal w-[290px] text-4xl focus:outline-none"
              ></input>
              <br></br>
              <input
                placeholder="add a description"
                className="placeholder:text-black placeholder:font-normal placeholder:opacity-50 text-base leading-6 focus:outline-none ml-1"
              ></input>
            </div>
          </div>
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />

          <div class="bg-white w-[97%] h-[18vh] rounded-2xl flex flex-col justify-center items-center">
            <button class="w-[100%] h-[18vh] rounded-2xl flex flex-col justify-center items-center">
              <img src={Add} class="h-[6vh] w-[8%]" />
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default MobileFormMaking;
