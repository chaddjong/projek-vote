import React from "react";

export default function PublicFormThumbnail(props) {
  const { title, author } = props;
  return (
    <body>
      <div
        id="btn_PbcForm"
        className="max-[1023px]:hidden flex justify-evenly bg-white w-[41%] h-[13vh] lg:h-[19vh] rounded-r-2xl rounded-l-md hover:bg-[#FFB546] mx-[4.2%] mt-5 lg:bg-[#d9d9d9] active:bg-orange-400 shadow-md shadow-black"
      >
        <div className="bg-[#6DB9FF] h-auto w-[8px] rounded-l-[20px]"></div>
        <div className="bg-[#FFFFFF] w-[100%] rounded-r-2xl">
          <button className="flex flex-col items-start w-[100%] h-[100%]">
            <p className="self-end xl:text-[14px] lg:mr-[5px] lg:text-[10px] mt-[1vh] text-[#2F76FF]">
              Expired Date
            </p>
            <p className="self-end xl:text-[14px] lg:mr-[5px] lg:text-[10px] text-[#2F76FF]">
              xx.xx
            </p>
            <h3 className="xl:text-[18px] lg:text-[15px] text-[#2F76FF] w-[65%] font-bold">
              {title.substring(0, 20)}...
            </h3>
            <p className="text-[8px] mt-4 text-[#74A5FF]">
              {author.substring(0, 30)}...
            </p>
          </button>
        </div>
      </div>
      <div id="btn_PbcForm" className="lg:hidden">
        <button className="bg-white w-[43vw] h-max rounded-[8px] flex flex-col">
          <div className="flex flex-col justify-end w-full pt-[0.5vh] pr-[1vh] text-[#2F76FF]">
            <p className="self-end font-medium text-[3vw]">
              Expire in : <br />
              <span className="font-bold">xx.xx</span>
            </p>
          </div>
          <p className="text-start text-[5vw] pl-[2.5vw] text-[#2F76FF] font-bold">
            {title}
          </p>
          <p className="text-start text-[3vw] pl-[2.5vw] text-[#2F76FF] font-bold">
            {author}
          </p>
        </button>
      </div>
    </body>
  );
}
