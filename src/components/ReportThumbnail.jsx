import React, { useState } from "react";
import Delete from "../img/delete.svg";

export default function ReportThumbnail() {
  return (
    <body>
      <div className="flex flex-row justify-between bg-[#F1F1F1] w-[86vw] h-[16.25vh] rounded-[9px] mb-4 shadow-[0px_3.29px_rgba(0,0,0,0.25)]">
        <div className="ml-[10px] mt-[9px]">
          <h1 className="text-xl font-semibold">Lorem ipsum dolor sit.</h1>
          <div className="w-[65vw] h-[7.5vh] mt-[3px]">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="font-[600] ml-2">
            <p>Expire in : xx.xx.xxxx</p>
          </div>
        </div>
        <div className="mr-[20px] mt-[17px]">
          <button>
            <img src={Delete} className="w-[16px] h-[18px]" />
          </button>
        </div>
      </div>
    </body>
  );
}
