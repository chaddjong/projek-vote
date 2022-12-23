import React from "react";
import BackArrow from "../img/arrow_back.svg";
// import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <body className="flex">
      <div className="w-[55%] h-[100vh] bg-white flex flex-col justify-start items-start">
        <div>
          <button class="w-[3vw]">
            <img src={BackArrow} class="" />
          </button>
        </div>
      </div>
      <div className="w-[45%] h-[100vh] bg-[#FFFFFF] shadow-[0_35px_60px_-15px_rgba(0, 0, 0, 0.25)] shadow-lg rounded-l-lg"></div>
    </body>
  );
}
