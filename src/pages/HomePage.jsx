import React from "react";
import HomeMenu from "../components/HomeMenu";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center mt-[83.83px] text-4xl text-center leading-[44.3px] font-inter font-bold text-[#434343]">
          <h1>WELCOME BACK USER!</h1>
        </div>
        <HomeMenu />
      </div>
    </div>
  );
}

export default HomePage;
