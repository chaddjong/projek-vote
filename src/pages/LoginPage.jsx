import React from "react";
import background from "../img/image 1.png";

function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center mt-[83.83px] text-4xl text-center leading-[44.3px] font-inter font-bold text-[#434343]">
        <h1>WELCOME TO UNKLAB FORMS</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-[0] w-[370px] pb-0">
        <img src={background} alt="background-img" />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#D9D9D9] w-[200px] h-[50px] rounded-[10px]">
        <button className="font-inter font-bold text-[25px]">Login Here</button>
      </div>
      <div className="pt-[10px]">
        <p className="font-inter">
          <a href="#">Login with your Unklab account</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
