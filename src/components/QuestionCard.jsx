import React from "react";
import Delete from "../img/delete.svg";
import Option from "../components/Option";

function QuestionCard() {
  return (
    <div className="flex flex-col bg-white w-[97%] h-max rounded-xl p-4 mt-4">
      <button className="ml-[93%] mb-[11.21px] lg:ml-[97%] sm:ml-[95%]">
        <img src={Delete} />
      </button>
      <input
        id="question"
        placeholder="Untitled question"
        className="border-black border-b-[1.46px] focus:outline-none placeholder-black text-xl pb-2 lg:text-3xl"
        required
      ></input>
      <div className="flex flex-start mt-[1em] ml-[0.5em] mb-4">
        <button
          type="file"
          className="text-[3.5vw] bg-[#D9D9D9] px-[14px] py-[10px] rounded-[5px] lg:text-xl sm:text-[18px] md:text-[20px]"
        >
          Add image
        </button>
      </div>
      <Option />
      <Option />
      <button className="flex w-max text-[#898989] ml-1 lg:text-xl">
        add option
      </button>
    </div>
  );
}

export default QuestionCard;
