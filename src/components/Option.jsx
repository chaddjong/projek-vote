import React from "react";
import AddPhoto from "../img/addphoto.svg";

export default function Option() {
  return (
    <div>
      <div className="flex items-center w-[95%] h-max gap-5 mb-5">
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
    </div>
  );
}
