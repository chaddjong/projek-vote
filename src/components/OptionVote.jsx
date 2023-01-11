import React from "react";

export default function Option() {
  return (
    <div>
      <div className="max-[1023px]:hidden flex items-center w-[95%] h-max gap-5 mt-4">
        {/* <label>
            <input type="radio" value="option1" name="gender"/>
            Option 1
        </label>
        <label>
            <input type="radio" value="option2" name="gender"/>
            Option 2
        </label> */}
        <input
          type="radio"
          id="option"
          value="option"
          name="option"
          className="ml-[10%] w-[20px] h-[20px]"
        ></input>
        <label for="option" className="lg:text-[1.5vw]  opacity-50">
          option
        </label>
      </div>

      {/* mobile layout */}
      <div className="lg:hidden flex flex-row justify-start items-center h-max ml-[2vw] mb-[2.5vh]">
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
            className="placeholder:text-[#898989] focus:w-[50vw] text-[4.5vw]"
          ></input>
        </label>
      </div>
    </div>
  );
}
