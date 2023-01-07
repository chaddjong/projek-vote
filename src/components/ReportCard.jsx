import React from "react";
export default function ReportCard() {
  return (
    <div className="max-[1023px]:hidden w-[77%] h-auto mt-4 py-5 px-2 bg-[#FFFFFF] rounded-xl shadow-md shadow-black">
      <p className="font-semibold text-[18px]">Untitled Question</p>
      <hr className="w-[90%] h-[2px] bg-black" />
      <div className="mt-6">
        <p className="text-[12px] text-[#898989]">option 1</p>
        <div className="flex">
          <div className="bg-[#D9D9D9] w-[50%] ml-6"></div>
          <p className="text-[12px] text-[#898989] ml-2">xxx</p>
        </div>
        <p className="text-[12px] text-[#898989]">option 2</p>
        <div className="flex">
          <div className="bg-[#D9D9D9] w-[50%] ml-6"></div>
          <p className="text-[12px] text-[#898989] ml-2">xxx</p>
        </div>
        <p className="text-[12px] text-[#898989]">option 3</p>
        <div className="flex">
          <div className="bg-[#D9D9D9] w-[50%] ml-6"></div>
          <p className="text-[12px] text-[#898989] ml-2">xxx</p>
        </div>
        <p className="text-[12px] text-[#898989]">option 4</p>
        <div className="flex">
          <div className="bg-[#D9D9D9] w-[50%] ml-6"></div>
          <p className="text-[12px] text-[#898989] ml-2">xxx</p>
        </div>
      </div>
    </div>
  );
}
