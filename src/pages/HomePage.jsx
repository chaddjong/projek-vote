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
    <div>
      <div className="lg:hidden">
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
              <Link to={"/form-checking"}>
                <button className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl hover:bg-[#FFB546]">
                  <p>See Form Responds</p>
                </button>
              </Link>
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
              {/* <PublicFormThumbnail /> */}
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
              <div className="flex flex-wrap justify-start w-[100%]">
                {/* <PublicFormThumbnail />
                <PublicFormThumbnail />
                <PublicFormThumbnail /> */}
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
    </div>
  );
}

export default HomePage;
