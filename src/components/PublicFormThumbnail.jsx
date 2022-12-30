import React from "react";

export default function PublicFormThumbnail(props) {
  const { title, author } = props;
  return (
    <div
      id="btn_PbcForm"
      className="flex justify-evenly bg-white w-[41%] h-[13vh] lg:h-[19vh] rounded-2xl hover:bg-[#FFB546] mx-[4.2%] mt-5 lg:bg-[#d9d9d9] active:bg-orange-400"
    >
      <button className="flex flex-col w-[100%] h-[100%]">
        <p className="self-end xl:text-[14px]">Expired Date</p>
        <p className="self-end xl:text-[14px]">xx.xx</p>
        <h3 className="text-[18px]">{title}</h3>
        <p className="text-[10px]">{author}</p>
      </button>
    </div>
  );
}
