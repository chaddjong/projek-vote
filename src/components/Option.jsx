import React from "react";
import AddPhoto from "../img/addphoto.svg";
import Close from "../img/close.svg";

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
        <label for="option" className="lg:text-xl">
          option
        </label>
        <form className=" flex justify-end items-center w-[100%] gap-5">
          <button>
            <img src={AddPhoto} />
          </button>
          <button>
            <img src={Close} />
          </button>
        </form>
      </div>
    </div>
  );
}
