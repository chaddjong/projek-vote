import React from "react";
import QuestionCard from "../components/QuestionCard";
import BackArrow from "../img/arrow_back.svg";

function Testing() {
  return (
    <body className="bg-[#D9D9D9] h-screen">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col bg-white w-[100%] h-44 rounded-b-2xl">
            <div>
              <button className="w-[30px] h-[30px] mt-[40px] ml-4">
                <img src={BackArrow} />
              </button>
            </div>
            <div className="mt-5 ml-5">
              <input
                placeholder="Untitled Form"
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
        </div>
      </div>
    </body>
  );
}

export default Testing;
