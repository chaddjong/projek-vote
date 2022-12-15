import React from "react";
import background from "../img/image 1.svg";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="relative">
      <div className="flex flex-row justify-center items-start h-screen">
        <div className="flex flex-col justify-center items-center mt-[83.83px]">
          <h1 className="text-4xl text-center leading-[44.3px] font-inter font-bold text-[#434343]">
            WELCOME TO UNKLAB FORMS
          </h1>
          <img
            src={background}
            alt="background-img"
            className="h-[27rem] w-[31rem]"
          />
          <div className="flex flex-col justify-center items-center">
            <Link to={"/home"}>
              <button className="font-inter font-bold text-[25px] w-[10rem] h-[3rem] bg-[#D9D9D9] rounded-[10px]">
                Login Here
              </button>
            </Link>
            <div className="pt-[10px]">
              <p className="font-inter">Login with your Unklab account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
