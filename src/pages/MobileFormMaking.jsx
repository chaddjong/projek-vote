import React from "react";
import QuestionCard from "../components/QuestionCard";
import BackArrow from "../img/arrow_back.svg";
import Add from "../img/add.svg";
import NextArrow from "../img/arrow_forward.svg";
// import "./bgform.css"; 
import { Link } from "react-router-dom";

function MobileFormMaking() {
  return (
    <div>
      <body className="bg-[#D9D9D9] h-[100%] w-[100%] pb-4 lg:hidden">
        <div className="flex justify-end items-end w-[100%] h-[100%] p-10">
          <div class=" w-[4.3%] h-[8vh] mr-5">
            <button className=" bg-[#EBEBEB] mt-[87vh]  lg:mt-[84vh] rounded-full shadow-[0_1.5px_7.3px_3.3px_rgba(0,0,0,0.25)] fixed z-10">
              <img src={NextArrow} />
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center w-full gap-5">
            <div className="flex flex-col  bg-white w-full h-44 rounded-b-2xl">
              <div>
                <button class="h-[4vh] w-[2%]">
                  <img src={BackArrow} class="h-[4vh] w-[100%]" />
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
      <div class=" max-[1024px]:hidden">
        <body className="flex flex-col justify-center items-center pb-[5vh]">
          <div class="w-[100%] bg-zinc-200 rounded-b-2xl flex flex-col justify-start items-start">
            <button type="submit" class="h-[2vh] w-[10%] mt-4 ml-2">
              <img src={BackArrow} alt="p" class="h-[4vh] w-[70%] " />
            </button>
            <input
              type="text"
              placeholder="Untitled form"
              class=" bg-transparent placeholder:text-black text-[5.5vh] mt-16 ml-5 font-inter h-[6vh] w-[90%]"
            />
            <input
              type="text"
              placeholder="add a description"
              class="bg-transparent placeholder:text-black opacity-50 mt-1 ml-5 font-inter h-[4vh] w-[90%] text-[15px]"
            />
          </div>
          <QuestionCard />
          <div class="bg-zinc-200 w-[97%] h-[18vh] rounded-2xl mt-5 flex flex-col justify-center items-center">
            <button class="w-[100%] h-[18vh] rounded-2xl flex flex-col justify-center items-center">
              <img src={Add} class="h-[6vh] w-[8%]" />
            </button>
          </div>
          <div class="h-[5vh] w-[100%] flex justify-start items-center">
            <button class="h-[10vh] w-[22%] mt-4 bg-[#D9D9D9] rounded-lg">
              Done
            </button>
          </div>
        </body>
      </div>
    </div>
  );
}

export default MobileFormMaking;
