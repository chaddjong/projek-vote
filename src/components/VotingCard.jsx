import React from "react";
import OptionVote from "../components/OptionVote";

export default function Card() {
  return (
    <body>
      <div className="w-[29%] max-[1023px]:w-[95%] max-[1023px]:mt-4 h-auto pb-2 bg-white rounded-xl flex flex-col max-[1023px]:hidden">
        <p className="mt-2 font-inter text-[#000000] ml-[5%] w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          recusandae deserunt assumenda iusto animi est officia. Excepturi
          accusamus fugit tempora! Eius est, sequi libero voluptatem odio
          blanditiis temporibus pariatur accusamus!
        </p>
        <hr className="bg-black h-[2px] w-[90%] flex place-self-center shadow-sm shadow-black" />
        <OptionVote />
      </div>

      {/* mobile layout */}
      <div className="lg:hidden w-[97vw] bg-white h-auto mt-[10px] rounded-xl flex flex-col justify-center p-5">
        <p className="border-black border-b-[2px] pb-[2px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis ligula diam, sit amet hendrerit libero sodales quis.
        </p>
        <div className="mt-[2.5vh]">
          <OptionVote />
          <OptionVote />
        </div>
      </div>
    </body>
  );
}
