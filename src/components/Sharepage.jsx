import React from "react";
export default function Share() {
  return (
    <div className="absolute h-[100vh] w-[100%] flex flex-col justify-center items-center z-10">
      <div class="bg-white h-auto w-[25%] rounded-lg pb-10">
        <p class="text-2xl text-black font-inter m-5 mt-8 ">Share Form as:</p>
        <label class="inline-flex items-start w-[95%]">
          <input type="checkbox" class="w-5 h-5 shadow ml-12" />
          <span class="ml-7 text-black text-[18px] font-inter">
            Public Form <br />
            <p class="font-inter text-[10px] text-black opacity-80">
              Public forms will be shown at Home Menu but still can be find by
              entering Token number. 
            </p>
          </span>
        </label>
        <label class="inline-flex items-start w-[95%] mt-4">
          <input type="checkbox" class="w-5 h-5 shadow ml-12" />
          <span class="ml-7 text-black text-[18px] font-inter">
            Private Form <br />
            <p class="font-inter text-[10px] text-black opacity-80">
              Private forms will not be shown at Home Menu, instead user can
              find it by entering Token number by sharing it
            </p>
          </span>
        </label>
        <div class="h-auto w-[100%]  flex justify-end items-center">
          <button class="bg-[#d9d9d9] h-auto w-[30%] mr-8 mt-7 rounded-xl p-1 py-2">
            Share Form
          </button>
        </div>
      </div>
    </div>
  );
}
