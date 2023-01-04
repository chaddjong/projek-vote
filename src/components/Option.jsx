import React from "react";
import AddPhoto from "../img/addphoto.svg";
import Delete from "../img/close.svg";

export default function Option() {
  return (
    <div>
      <div className="max-[1023px]:hidden flex items-center w-[95%] h-max gap-5 mb-5">
        {/* <label>
            <input type="radio" value="option1" name="gender"/>
            Option 1
        </label>
        <label>
            <input type="radio" value="option2" name="gender"/>
            Option 2
        </label> */}
        <input type="radio" id="option" value="option" name="option"></input>
        <label for="option" className="lg:text-[1.5vw]">
          <input type="text" placeholder="option" className=" sm:w-[95%]" />
        </label>
      </div>

      {/* mobile layout */}
      <div className="lg:hidden flex flex-row justify-start items-center h-max ml-[6vw] mb-[2.5vh] mt-[2.5vh]">
        <input
          type="radio"
          id="option"
          value="option"
          name="option"
          className="w-5 h-5"
        ></input>
        <label for="option" className="ml-[5vw] w-[55vw]">
          <input
            type="text"
            placeholder="option"
            className="placeholder:text-[#898989] focus:w-[50vw] text-[4.5vw] focus:outline-none"
          ></input>
        </label>
        <div className="flex flex-row gap-[7.5vw]">
          <img src={AddPhoto} />
          <img src={Delete} />
        </div>
      </div>
    </div>
  );
}
