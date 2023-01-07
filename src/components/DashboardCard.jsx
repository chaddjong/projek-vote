import React from "react";
import Delete from "../img/delete.svg";

export default function DashboardCard() {
  return (
    <body>
      <div className="z-10 relative w-[15rem] xl:w-[18rem] h-auto p-2 bg-[#D9D9D9] max-[1023px]:hidden rounded-xl mb-4">
        <button className="z-10 absolute left-[91%] hover:bg-slate-600">
          <img src={Delete} />
        </button>
        <button className="flex flex-col">
          <p className="text-[10px] text-[#000000]">Expire in : xx.xx</p>
          <p className="text-[18px] text-[#000000] w-[70%] mt-[20px]">
            Lorem ipsum dolor sit ame....
          </p>
          <p className="text-[8px] text-[#000000] w-[95%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            convallis ligula diam, sit amet hendrerit libero sodales quis.
          </p>
        </button>
      </div>
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
