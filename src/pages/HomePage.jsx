import React from "react";
import NextArrow from "../img/arrow_forward.svg";
import PublicFormThumbnail from "../components/PublicFormThumbnail";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [data, setData] = React.useState([]);
  axios.get("http://localhost:4000/form").then((res) => {
    setData(res.data);
  });
  return (
    <body>
      {/* mobile layout */}
      <div className="lg:hidden flex flex-col justify-start items-center h-screen">
        <h1 className="text-center text-[8.5vw] mt-[79px] text-[#2F76FF] font-inter font-extrabold">
          WELCOME BACK
          <br />
          USER!
        </h1>
        <div className="w-[90vw] mt-[25px] flex justify-end items-center relative">
          <input
            type="text"
            placeholder="Token"
            className="border-[#2F76FF] placeholder:text-[#2F76FF] focus:outline-none text-black border-[2px] font-inter font-medium rounded-2xl p-[15px] text-lg w-[100%] py-4"
          ></input>
          <button className="absolute right-[5vw]">
            <img className="w-[25px] h-[25px]" src={NextArrow} />
          </button>
        </div>
        <div className="flex flex-row gap-[5vw] mt-[3vh]">
          <button className="bg-[#216CFF] w-[42.5vw] rounded-2xl py-[2vh]">
            <p className="text-center text-white text-[5vw] font-extrabold tracking-widest">
              See Form
              <br />
              Responds
            </p>
          </button>
          <button className="bg-[#216CFF] w-[42.5vw] rounded-2xl py-[2vh]">
            <p className="text-center text-white text-[5vw] font-extrabold tracking-widest">
              Create
              <br />
              Form
            </p>
          </button>
        </div>
        <div className="bg-[#68a1e6] w-[98%] h-screen mt-[50px] rounded-t-[6px] px-3 py-5 flex flex-row justify-between flex-wrap">
          {data.map((item) => {
            return (
              <PublicFormThumbnail
                title={item.information.title}
                author={item.information.createdBy}
              />
            );
          })}
        </div>
      </div>

      <div className="max-[1023px]:hidden">
        <div className="flex flex-col justify-center items-center">
          <div class="flex justify-start items-start h-[100vh] w-[100%]">
            <div class="flex flex-col justify-evenly items-center h-[100%] w-[50%]">
              <h1 class="font-inter text-[3.5vw] text-center text-[#434343]">
                WELCOME BACK <br></br> USER
              </h1>
              <Link to={"/form-making"}>
                <button
                  id="btn_Crt"
                  class="h-[20vh] w-[28vw] shadow-sm shadow-black bg-[#D9D9D9] rounded-md font-inter text-[24px] hover:bg-orange-300 active:bg-orange-400"
                >
                  Create Form
                </button>
              </Link>
              <Link to={"/form-checking"}>
                <button
                  id="btn_SeeForm"
                  class="h-[20vh] w-[28vw] shadow-sm shadow-black  bg-[#D9D9D9] rounded-md font-inter text-[24px] text-center hover:bg-orange-300 active:bg-orange-400"
                >
                  See Form <br></br> Responds
                </button>
              </Link>
            </div>
            <div class="flex flex-col justify-start items-center h-[100%] w-[50%] rounded-l-3xl bg-[#FFFFFF] shadow-2xl shadow-[#00000040]">
              <form class="h-[8vh] w-[80%] flex justify-center items-center border-[1px] border-[#000000] rounded-xl  mt-8">
                <input
                  type="text"
                  placeholder="Token"
                  class="block h-[7.7vh] w-[100%] rounded-xl placeholder:pl-4 text-[17px] font-medium"
                ></input>
                <button id="btn_Src" type="submit" class="h-[5vh] w-[50px]">
                  <img
                    src={NextArrow}
                    class="h-[5vh] w-[100%] lg:h-[3vh] lg:w-[80%] pr-2 "
                  ></img>
                </button>
              </form>
              {/* <h1 class="text-[25px] font-normal my-auto mx-auto opacity-30 font-inter"> 
               No Public Forms <br></br> At The Moment
              </h1>*/}
              <div className="flex flex-wrap justify-evenly w-[100%]">
                {data.map((item) => {
                  return (
                    <PublicFormThumbnail
                      title={item.information.title}
                      author={item.information.createdBy}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default HomePage;
