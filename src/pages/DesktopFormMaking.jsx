import React from "react";
import Back from "../img/arrow_back.svg";
import Close from "../img/close.svg";
import Photo from "../img/addphoto.svg";
import Add from "../img/add.svg";

export default function FormMaking() {
  return (
    <body className="flex flex-col justify-center items-center">
      <div class="h-[30vh] w-[30%] bg-zinc-200 rounded-b-2xl flex flex-col justify-start items-start">
        <button type="submit" class="h-[2vh] w-[10%] mt-4 ml-2">
          <img src={Back} alt="p" class="h-[4vh] w-[70%] " />
        </button>
        <input
          type="text"
          placeholder="Untitled form"
          class=" bg-transparent placeholder:text-black text-[5.5vh] mt-16 ml-5 font-inter h-[6vh] w-[90%]"
        />
        <input
          type="text"
          placeholder="add a description"
          class="bg-transparent placeholder:text-black opacity-50 mt-1 ml-5 font-inter h-[4vh] w-[90%] text-[15px]"
        />
      </div>
      <div class="bg-zinc-200 rounded-2xl h-auto w-[30%] py-4 mt-4  ">
        <input
          type="text"
          placeholder="Untitled Question"
          class="h-[4.5vh] w-[85%] text-2xl ml-4 mt-5 border-b-2 border-black bg-transparent"
        />
        <p class="text-[#FF4B4B] ml-4 text-[14px] mt-1 font-inter">
          This field needs to be filled
        </p>
        <input
          type="image"
          class="text-center h-[6vh] w-[30%] bg-[#D9D9D9] rounded-lg ml-7 mt-7"
        />
        <ul class="ml-7 mt-5">
          <li>
            <div class="block">
              <div class="mt-7">
                <label class="inline-flex items-center w-[95%]">
                  <input type="checkbox" class="w-5 h-5 rounded-full shadow" />
                  <span class="ml-7 opacity-50 text-black text-[18px]">
                    option
                  </span>
                  <form class="w-[100%] flex justify-end items-center">
                    <button class="mr-5">
                      <img src={Photo} />
                    </button>
                    <button class="">
                      <img src={Close} />
                    </button>
                  </form>
                </label>
              </div>
            </div>
          </li>
          <li>
            <div class="block">
              <div class="mt-7">
                <label class="inline-flex items-center w-[95%]">
                  <input type="checkbox" class="w-5 h-5 rounded-full shadow" />
                  <span class="ml-7 opacity-50 text-black text-[18px]">
                    option
                  </span>
                  <form class="w-[100%] flex justify-end items-center">
                    <button class="mr-5">
                      <img src={Photo} />
                    </button>
                    <button class="">
                      <img src={Close} />
                    </button>
                  </form>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bg-zinc-200 w-[30%] h-[18vh] rounded-2xl mt-5 flex flex-col justify-center items-center">
        <button class="w-[100%] h-[18vh] rounded-2xl flex flex-col justify-center items-center">
          <img src={Add} class="h-[6vh] w-[8%]" />
        </button>
      </div>
      <div class="h-[5vh] w-[30%] flex justify-start items-center">
        <button class="h-[5vh] w-[22%] mt-4 bg-[#D9D9D9] rounded-lg">
          Done
        </button>
      </div>
    </body>
  );
}
