import React from "react";
import NextArrow from "../img/arrow_forward.svg";
import PublicFormThumbnail from "../components/PublicFormThumbnail";
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center mt-[83.83px] text-4xl text-center leading-[44.3px] font-inter font-bold text-[#434343]">
          <h1>WELCOME BACK USER!</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form className="relative z-0" action="">
            <input
              placeholder="Token"
              className="border-black text-black border-[2px] font-inter font-medium rounded-2xl p-[15px] text-lg w-[320px] mt-[20px] py-4"
            ></input>
            <button className="absolute z-1 w-[20px] h-[20px] top-[43px] right-[27px]">
              <img src={NextArrow} />
            </button>
          </form>
          <div className="flex flex-row justify-center items-center mt-[30px] gap-[13px]">
            <button className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl hover:bg-[#FFB546]">
              <p>See Form Responds</p>
            </button>
            <Link to={"/form-making"}>
              <button className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl hover:bg-[#FFB546]">
                <p>
                  Create <br /> Form
                </p>
              </button>
            </Link>
            {/* <div className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl">
          <p>See Form <br/>Responds</p>
        </div>
        <div className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl">
          <p>Create <br/>Form</p>
        </div> */}
          </div>
        </div>
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
