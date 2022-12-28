import React from "react";
import Success from "../img/success.svg";
import { Link } from "react-router-dom";

export default function success() {
  return (
    <body>
      {/* desktop layout */}
      <div className="max-[1023px]:hidden bg-white flex flex-col justify-center items-center h-[100vh] w-[100%]">
        <div className="text-center text-[5vw] lg:text-[3vw] font-bold">
          <p>YOUR RESPONSES</p>
          <p>HAS SUCCESFULLY</p>
          <p>BEEN RECORDED</p>
          <br />
          <button className=" underline">go back to home page</button>
        </div>
      </div>

      {/* mobile layout */}
      <div className="lg:hidden flex flex-col justify-center items-center h-[100vh] w-[100%]">
        <div className="mb-[70px]">
          <img src={Success} />
        </div>
        <div className="flex flex-col justify-center items-center text-[4vh] font-bold">
          <p>Your responses have</p>
          <p>successfully been</p>
          <p>recorded</p>
        </div>
        <Link to={"/home"}>
          <p className="text-black opacity-50 mt-[10vh] font-medium">
            Tap here to return to menu
          </p>
        </Link>
      </div>
    </body>
  );
}
