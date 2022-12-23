import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

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
          <a href="#" className="mt-5">
            tap here to return to home page
          </a>
        </div>
      </div>
    </div>
  );
}
