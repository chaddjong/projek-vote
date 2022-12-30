import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Success from "../img/success.svg";
import { Link } from "react-router-dom";

export default function MakingToken() {
  return (
    <div>
      <div className="h-[100vh] w-[100%] flex flex-col justify-evenly items-center max-[1023px]:hidden">
        <div className="h-[70vh] w-[50%]  flex flex-col justify-evenly items-center">
          <p className="h-[30vh] w-[50%] text-center lg:text-4xl sm:text-3xl font-semibold text-[#434343]">
            YOUR FORM <br /> HAS SUCCESFULLY BEEN MADE
          </p>
          <div className="font-semibold text-[#434343] text-4xl mt-[100px] flex">
            <p value="009870ZX">009870ZX</p>
          </div>
          <CopyToClipboard text="009870ZX">
            <button className="h-[8vh] w-[14%] bg-[#D9D9D9] rounded-lg mt-5">
              Copy
            </button>
          </CopyToClipboard>
          <a href="#" className="mt-5">
            tap here to return to home page
          </a>
        </div>
      </div>
      <div className="h-[100vh] w-[100%] flex flex-col justify-evenly items-center lg:hidden">
        <div className="h-[70vh] w-[100%]  flex flex-col justify-evenly items-center">
          <p className="h-[30vh] w-[50%] text-center lg:text-4xl sm:text-3xl font-semibold text-[#434343]">
            YOUR FORM <br /> HAS SUCCESFULLY BEEN MADE
          </p>
          <p className="font-semibold text-[#434343] lg:text-4xl sm:text-3xl mt-[100px]">
            009876ZX
          </p>
          <button className="h-[8vh] w-[14%] bg-[#D9D9D9] rounded-lg mt-5">
            Copy
          </button>
          <div>
            <Link to="/home">
              <button className="mt-5 w-auto h-auto">
                tap here to return to home page
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile layout */}
      <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center lg:hidden">
        <img src={Success} />
        <div className="bg-[#E4F0FF] px-[57px] py-[12px] rounded-xl text-[6vw] font-semibold mt-[10vh]">
          <p>6660982F67BX4V</p>
        </div>
        <button className="bg-[#3E8BFF] text-white text-[5vw] px-[8vw] py-[1vh] rounded-lg mt-[2.5vh]">
          COPY
        </button>
        <div className="flex flex-col items-center mt-[3vh] text-[#595959]">
          <p>Copy this token and share it with your</p>
          <p>friends and see their responses</p>
        </div>
        <Link
          to={"/home"}
          className="opacity-50 font-semibold mt-[10vh] mb-[5vh]"
        >
          <p>Tap here to return to home menu</p>
        </Link>
      </div>
    </div>
  );
}
