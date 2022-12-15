import React from "react";
import Img from "../image/img.png";
import diamond from "../image/diamond.png";

export default function DeskstopLogin() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex justify-start items-start h-[80vh] w-[65%] border-[1px] border-black my-16 shadow-sm shadow-black">
        <img src={Img} class="bg-[#FFB546] h-[100%] w-[50%]" />
        <div class="flex flex-col justify-evenly items-center h-[100%] w-[50%]">
          <img src={diamond} class="h-[80px] w-[100px] "></img>
          <h1 class="font-inter text-[4.8vh] text-center text-[#434343]">
            WELCOME TO <br></br> UNKLAB FORMS
          </h1>
          <button class="h-[6vh] w-[40%] bg-[#D9D9D9] rounded-[15px] font-inter hover:bg-orange-300">
            Login Here
          </button>
        </div>
      </div>
    </div>
  );
}
