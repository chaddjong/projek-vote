import React from "react";

export default function PublicFormThumbnail(props) {
  const { title, author } = props;
  return (
    <body>
      <div
        id="btn_PbcForm"
        className="max-[1023px]:hidden flex justify-evenly bg-white w-[41%] h-[13vh] lg:h-[19vh] rounded-2xl hover:bg-[#FFB546] mx-[4.2%] mt-5 lg:bg-[#d9d9d9] active:bg-orange-400"
      >
        <button className="flex flex-col w-[100%] h-[100%]">
          <p className="self-end xl:text-[14px]">Expired Date</p>
          <p className="self-end xl:text-[14px]">xx.xx</p>
          <h3 className="text-[18px]">{title}</h3>
          <p className="text-[10px]">{author}</p>
        </button>
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
