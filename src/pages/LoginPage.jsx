import React from "react";
import background from "../img/image 1.svg";
import Diamond from "../img/diamond.png";

function LoginPage() {
  return (
    <div className="relative">
      <div class="lg:hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center mt-[83.83px] text-4xl text-center leading-[44.3px] font-inter font-bold text-[#434343]">
            <h1>
              WELCOME TO <br /> UNKLAB FORMS
            </h1>
          </div>
          <div className="top-[150px]">
            <img src={background} alt="background-img" />
          </div>
          <div className="flex flex-col justify-center items-center bg-[#D9D9D9] w-[200px] h-[50px] rounded-[10px] lg:hidden">
            <button className="font-inter font-bold text-[25px]">
              Login Here
            </button>
          </div>
          <div className="pt-[10px] lg:hidden">
            <p className="font-inter">
              <a href="#">Login with your Unklab account</a>
            </p>
          </div>
        </div>
      </div>
      <div class="max-[1024px]:hidden">
        <div className=" flex flex-col justify-center items-center">
          <div className="flex justify-start items-start h-[80vh] w-[65%] border-[1px] border-black my-16 shadow-sm shadow-black">
            <img src={background} class="bg-[#FFB546] h-[100%] w-[50%]" />
            <div class="flex flex-col justify-evenly items-center h-[100%] w-[50%]">
              <img src={Diamond} class="h-[80px] w-[100px] "></img>
              <h1 class="font-inter font-bold text-[4.8vh] text-center text-[#434343]">
                WELCOME TO <br></br> UNKLAB FORMS
              </h1>
              <button class="h-[6vh] w-[40%] bg-[#D9D9D9] rounded-[15px] font-inter hover:bg-orange-300">
                Login Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
