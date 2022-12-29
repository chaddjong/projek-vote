import React from "react";

export default function DashboardCard() {
  return (
    <body>
      {/* mobile layout */}
      <div className="lg:hidden flex flex-row justify-start bg-white w-[97vw] h-max rounded-xl mt-[13px] mb-[10px]">
        <div className="flex flex-col">
          <h1 className="text-[3vh] mt-[4vh] border-b-2 border-black pb-[4px] ml-[15px] font-[400] w-[80vw]">
            Untitled Question
          </h1>
          <div className="flex flex-col ml-[20px] mt-[30px] text-[#898989] pb-[25px]">
            <p>option 1</p>
            <div className="flex flex-row items-center mb-[10px]">
              <div className="bg-[#D9D9D9] w-[235px] h-[20px] ml-[5vw]"></div>
              <p className="ml-[9px]">xxx</p>
            </div>
            <p>option 2</p>
            <div className="flex flex-row items-center mb-[10px]">
              <div className="bg-[#D9D9D9] w-[235px] h-[20px] ml-[5vw]"></div>
              <p className="ml-[9px]">xxx</p>
            </div>
            <p>option 3</p>
            <div className="flex flex-row items-center mb-[10px]">
              <div className="bg-[#D9D9D9] w-[235px] h-[20px] ml-[5vw]"></div>
              <p className="ml-[9px]">xxx</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
