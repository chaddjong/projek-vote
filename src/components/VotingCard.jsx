import React from "react";
import OptionVote from "../components/OptionVote";
export default function Card() {
  return (
    <div className="w-[29%] h-auto pb-2 bg-white rounded-xl flex flex-col">
      <p className="mt-2 font-inter text-[#000000] ml-[5%] w-[90%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        recusandae deserunt assumenda iusto animi est officia. Excepturi
        accusamus fugit tempora! Eius est, sequi libero voluptatem odio
        blanditiis temporibus pariatur accusamus!
      </p>
      <hr className="bg-black h-[2px] w-[90%] flex place-self-center shadow-sm shadow-black" />
      <OptionVote />
    </div>
  );
}
