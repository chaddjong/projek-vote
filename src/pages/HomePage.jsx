import React from "react";
import HomeMenu from "../components/HomeMenu";
import PublicFormThumbnail from "../components/PublicFormThumbnail";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center mt-[83.83px] text-4xl text-center leading-[44.3px] font-inter font-bold text-[#434343]">
          <h1>WELCOME BACK USER!</h1>
        </div>
        <HomeMenu />
        <div className="w-[350px] h-screen bg-[#D9D9D9] mt-10 rounded-lg">
          {/* <div className="flex flex-col justify-center items-center font-inter font-normal text-xl leading-6 text-black opacity-40">
            <p>No Public Forms</p>
            <p>At The Moment</p>
          </div> */}
          <div className="flex flex-wrap justify-start">
            <PublicFormThumbnail />
            <PublicFormThumbnail />
            <PublicFormThumbnail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
