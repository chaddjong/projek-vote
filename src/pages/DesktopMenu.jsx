import React from "react";
import Arrow from "../image/Arrow.png";

export default function Desktop() {
  return (
    <body className="flex flex-col justify-center items-center">
      <div class="flex justify-start items-start h-[80vh] w-[65%] border-[1px] border-black my-16 shadow-sm shadow-black">
        <div class="flex flex-col justify-evenly items-center h-[100%] w-[50%]">
          <h1 class="font-inter text-4xl text-center text-[#434343]">
            WELCOME BACK <br></br> USER
          </h1>
          <button class="h-[100px] w-[80%]  bg-[#D9D9D9] rounded-md font-inter text-[24px] hover:bg-orange-300">
            Create Form
          </button>
          <button class="h-[100px] w-[80%]  bg-[#D9D9D9] rounded-md font-inter text-[24px] text-center hover:bg-orange-300">
            See Form <br></br> Responds
          </button>
        </div>
        <div class="flex flex-col justify-center items-center h-[100%] w-[50%] rounded-l-3xl bg-[#FFFFFF] shadow-2xl shadow-[#00000040]">
          <form class="h-[8vh] w-[80%] flex justify-center items-center border-[1px] border-[#000000] rounded-xl  mt-8">
            <input
              type="text"
              placeholder="Token"
              class="block h-[7.6vh] w-[100%] rounded-xl placeholder:pl-4 text-[17px] font-medium"
            ></input>
            <button type="submit" class="h-[5vh] w-[50px]">
              <img src={Arrow} class="h-[5vh] w-[100%] pr-2 "></img>
            </button>
          </form>
          <h1 class="text-[25px] font-normal my-auto mx-auto opacity-30 font-inter">
            No Public Forms <br></br> At The Moment
          </h1>
        </div>
      </div>
    </body>
  );
}
