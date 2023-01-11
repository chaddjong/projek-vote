import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../img/arrow_back.svg";
import VotingCard from "../components/VotingCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Voting() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/form/8su3nqvci")
      .then((response) => {
        console.log("Getting from :::", response.data);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <body className="">
      <div className="bg-[#D9D9D9] h-full pb-4  max-[1023px]:hidden">
        <div className="flex flex-col justify-center items-center">
          <div className=" bg-white w-full lg:w-[30%] h-auto rounded-b-2xl lg:mb-5 lg:h-auto lg:pb-4 flex flex-col">
            <div>
              {/* <Link to="/home"> */}
              <button className="h-[4vh] w-[8%] sm:w-[5%] lg:w-[2vw] m-4">
                <img src={BackArrow} class="h-[4vh] w-[100%]" />
              </button>
              {/* </Link> */}
            </div>
            <div className="mt-5 ml-5 lg:mt-8">
              <p className=" text-black font-normal w-[95%] text-4xl focus:outline-none lg:text-[3vw]">
                {/* {data.information.title} */}
              </p>
              <br></br>
              <p className="text-black font-no  rmal opacity-50 text-base leading-6 focus:outline-none ml-1 w-[95%] lg:text-[1.5vw]">
                {/* {data.information.description} */}
              </p>
            </div>
          </div>
          <VotingCard />
          <div className="w-[29%] h-auto">
            <button className="bg-[#656565] py-2 px-8 shadow-sm shadow-black rounded-lg mt-2">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* mobile layout */}
      <div className="flex flex-col items-center min-h-screen bg-[#94BBFF] lg:hidden w-full">
        <div className="bg-white w-full h-max pb-[10px] rounded-b-xl">
          {/* <Link to="/home"> */}
          <button className="mt-[25px] ml-[20px] mb-[10px]">
            <img src={BackArrow} className="w-[7.5vw]" />
          </button>
          {/* </Link> */}
          <h1 className="text-[10vw] ml-[22px]">Untitled form</h1>
          <p className="ml-[25px] w-[92.5vw] opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            convallis ligula diam, sit amet hendrerit libero sodales quis.
          </p>
        </div>
        <VotingCard />
        <div className="flex justify-start w-[90vw] mt-[26px]">
          <button className="text-white bg-[#3E8BFF] w-[120px] h-[50px] rounded-2xl font-extrabold">
            SUBMIT
          </button>
        </div>
      </div>
    </body>
  );
}
