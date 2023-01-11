import React, { useState } from "react";
import BackArrow from "../img/arrow_back.svg";
import { Link } from "react-router-dom";
import ReportThumbnail from "../components/ReportThumbnail";
import DashboardCard from "../components/DashboardCard";
import ReportCard from "../components/ReportCard";
export default function FormChecking() {
  return (
    <div>
      <div className="flex max-[1023px]:hidden">
        <div className="w-[50%] h-[100vh] bg-white flex flex-col justify-start items-start max-[1023px]:hidden">
          <div>
            <Link to={"/home"}>
              <button class="w-[3vw]">
                <img src={BackArrow} class="" />
              </button>
            </Link>
            <div className="flex h-auto w-[100%] flex-wrap justify-evenly">
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-[50%] h-auto pb-4 bg-[#FFFFFF] shadow-[0_35px_60px_-15px_rgba(0, 0, 0, 0.25)] shadow-lg rounded-l-lg max-[1023px]:hidden overflow-scroll">
          <div className="flex flex-col bg-[#FFFFFF] w-[80%] h-auto p-4 shadow-md shadow-black rounded-lg mt-2">
            <p className="text-[#000000] opacity-[50%] text-[10px] flex self-end">
              Form will expire in xxx
            </p>
            <p className="text-[35px] text-black font-semibold">
              Untitled form
            </p>
            <p className="text-[14px] text-[#000000] opacity-[50%]">
              xxx people fill this form
            </p>
          </div>
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </div>
      </div>
      {/* // mobile layout */}
      <div className="lg:hidden">
        <div className="flex flex-col h-screen">
          <div className="flex justify-start mt-[39px] ml-[11px] pb-[10px]">
            <Link to={"/home"} className="w-[10vw] h-[10vw]">
              <img src={BackArrow} />
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
      </div>
    </div>
  );
}
