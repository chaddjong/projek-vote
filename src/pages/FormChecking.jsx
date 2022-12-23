import React, { useState } from "react";
import BackArrow from "../img/arrow_back.svg";
import { Link } from "react-router-dom";
import ReportThumbnail from "../components/ReportThumbnail";

export default function FormChecking() {

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-start mt-[39px] ml-[10px] pb-[10px]">
        <Link to={"/home"}>
          <button>
            <img src={BackArrow} className="w-[10vw] h-[10vw]" />
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-start items-center h-screen">
        {/* <div className="flex flex-col justify-center items-center text-black opacity-[45%] text-[5.5vw]">
          <p>You Haven't Created</p>
          <p>Any Forms Yet</p>
        </div> */}
        <div>
          <ReportThumbnail />
        </div>
      </div>
    </div>
  );
}
