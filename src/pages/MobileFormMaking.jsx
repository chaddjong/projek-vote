import React from "react";
import QuestionCard from "../components/QuestionCard";
import BackArrow from "../img/arrow_back.svg";
import Add from "../img/add.svg";
import NextArrow from "../img/arrow_forward.svg";
// import "./bgform.css";
import { Link } from "react-router-dom";

function MobileFormMaking() {
  return (
    <div className="bg-[#D9D9D9] h-screen">
      <div className="bg-[#D9D9D9] pb-2">
        <div className="flex justify-end items-end w-[100%] h-[100%]">
          <div class="mr-20 lg:hidden">
            <button className=" bg-[#EBEBEB] p-5 mt-[89vh] rounded-full shadow-[0_1.5px_7.3px_3.3px_rgba(0,0,0,0.25)] fixed z-20 active:bg-orange-400">
              <img src={NextArrow} />
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div className=" bg-white w-full h-44 rounded-b-2xl">
              <div>
                <button class="h-[4vh] w-[8%] sm:w-[5%] lg:w-[2.5%] m-4">
                  <img src={BackArrow} class="h-[4vh] w-[100%]" />
                </button>
              </div>
              <div className="mt-5 ml-5">
                <input
                  placeholder="Untitled form"
                  className="text-black placeholder:text-black placeholder:font-normal w-[95%] text-4xl focus:outline-none lg:text-5xl"
                ></input>
                <br></br>
                <input
                  placeholder="add a description"
                  className="placeholder:text-black placeholder:font-normal placeholder:opacity-50 text-base leading-6 focus:outline-none ml-1 w-[95%]"
                ></input>
              </div>
            </div>

            <QuestionCard />
            <QuestionCard />

            <div class="bg-white w-[97%] h-[18vh] rounded-2xl flex flex-col justify-center items-center mt-5">
              <button class="w-[100%] h-[18vh] rounded-2xl flex flex-col justify-center items-center">
                <img src={Add} class="h-[6vh] w-[8%]" />
              </button>
            </div>
          </div>
          <div class="h-[5vh] w-[30%] flex justify-start items-center max-[1024px]:hidden">
            <button class="h-[5vh] w-[22%] mt-4 bg-white rounded-lg ml-[5%] hover:bg-orange-300 active:bg-orange-400">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFormMaking;
