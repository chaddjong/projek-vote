import React from "react";
import background from "../img/image 1.svg";
import { Link } from "react-router-dom";
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
          <div className="flex flex-col justify-center items-center lg:hidden">
            <Link to="/home">
              <button
                id="btn_Log"
                className="flex justify-center items-center font-inter font-bold text-[25px] bg-[#D9D9D9] w-[200px] h-[50px] rounded-[10px]"
              >
                Login Here
              </button>
            </Link>
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
          <div className="flex justify-start items-start h-[100vh] w-[100%]">
            <img src={background} class="bg-[#FFB546] h-[100%] w-[50%]" />
            <div class="flex flex-col justify-evenly items-center h-[100%] w-[50%]">
              <img src={Diamond} class="h-[80px] w-[100px] "></img>
              <h1 class="font-inter font-bold text-[8vh] text-center text-[#434343]">
                WELCOME TO <br></br> UNKLAB FORMS
              </h1>
              <Link to={"/home"}>
                <button
                  id="btn_Log"
                  class="h-[7vh] px-20 bg-[#D9D9D9] rounded-[15px] font-inter hover:bg-orange-300 text-2xl active:bg-orange-400 font-semibold"
                >
                  Login Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
