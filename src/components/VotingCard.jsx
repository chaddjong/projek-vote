import React from "react";
import OptionVote from "../components/OptionVote";

export default function Card(props) {
  const title = props;
  return (
    <div className="w-[29%] max-[1023px]:w-[95%] max-[1023px]:mt-4 h-auto pb-2 bg-white rounded-xl flex flex-col">
      <p className="mt-2 font-inter text-[#000000] ml-[5%] w-[90%]">para</p>
      <hr className="bg-black h-[2px] w-[90%] flex place-self-center shadow-sm shadow-black" />
      <OptionVote />
    </div>
  );
}
