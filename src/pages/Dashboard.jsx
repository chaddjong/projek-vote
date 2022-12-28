import React from "react";
import BackArrow from "../img/arrow_back.svg";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  return (
    <body className="flex">
      <div className="w-[55%] h-[100vh] bg-white flex flex-col justify-start items-start max-[1023px]:hidden">
        <div>
          <Link>
            <button class="w-[3vw]">
              <img src={BackArrow} class="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[45%] h-[100vh] bg-[#FFFFFF] shadow-[0_35px_60px_-15px_rgba(0, 0, 0, 0.25)] shadow-lg rounded-l-lg max-[1023px]:hidden"></div>

      {/* mobile layout */}
      <div className="flex flex-col justify-start items-center bg-[#D9D9D9] w-screen h-screen">
        <div className="bg-white w-screen h-max rounded-b-xl flex flex-col p-2">
          <Link
            to={"/form-checking"}
            className="w-[10vw] h-[10vw] mt-[30px] ml-[5px] mb-[20px]"
          >
            <img src={BackArrow} />
          </Link>
          <div className="ml-[12px]">
            <h1 className="text-4xl mb-[10px]">Untitled form</h1>
            <p className="ml-[4px] text-[17px] opacity-50">xxx people fill this form</p>
          </div>
        </div>
        <div>
          <DashboardCard />
          <DashboardCard />
        </div>
      </div>
    </body>
  );
}
