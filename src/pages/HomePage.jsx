import React from "react";
import Arrow from "../img/Arrow.png";
import HomeMenu from "../components/HomeMenu";

import PublicFormThumbnail from "../components/PublicFormThumbnail";

function HomePage() {
  return (
    <div>
      <div className="lg:hidden">
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
      <div className="max-[1024px]:hidden">
        <div className="flex flex-col justify-center items-center">
          <div class="flex justify-start items-start h-[100vh] w-[100%]">
            <div class="flex flex-col justify-evenly items-center h-[100%] w-[50%]">
              <h1 class="font-inter text-5xl text-center text-[#434343]">
                WELCOME BACK <br></br> USER
              </h1>
              <button
                id="btn_Crt"
                class="h-[18vh] w-[80%] bg-[#D9D9D9] rounded-md font-inter text-[24px] hover:bg-orange-300 active:bg-orange-400"
              >
                Create Form
              </button>
              <button
                id="btn_SeeForm"
                class="h-[18vh] w-[80%]  bg-[#D9D9D9] rounded-md font-inter text-[24px] text-center hover:bg-orange-300 active:bg-orange-400"
              >
                See Form <br></br> Responds
              </button>
            </div>
            <div class="flex flex-col justify-start items-center h-[100%] w-[50%] rounded-l-3xl bg-[#FFFFFF] shadow-2xl shadow-[#00000040]">
              <form class="h-[8vh] w-[80%] flex justify-center items-center border-[1px] border-[#000000] rounded-xl  mt-8">
                <input
                  type="text"
                  placeholder="Token"
                  class="block h-[7.7vh] w-[100%] rounded-xl placeholder:pl-4 text-[17px] font-medium"
                ></input>
                <button id="btn_Src" type="submit" class="h-[5vh] w-[50px]">
                  <img src={Arrow} class="h-[5vh] w-[100%] pr-2 "></img>
                </button>
              </form>
              {/* <h1 class="text-[25px] font-normal my-auto mx-auto opacity-30 font-inter"> 
               No Public Forms <br></br> At The Moment
              </h1>*/}
              <div className="flex flex-wrap justify-start w-[100%]">
                <PublicFormThumbnail />
                <PublicFormThumbnail />
                <PublicFormThumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
