import React from "react";
import { Link } from "react-router-dom";
export default function success() {
  return (
    <body className="bg-white flex flex-col justify-center items-center h-[100vh] w-[100%]">
      <div className="text-center text-[5vw] lg:text-[3vw] font-bold">
        <p>YOUR RESPONSES</p>
        <p>HAS SUCCESFULLE</p>
        <p>BEEN RECORDED</p>
        <br />
        <Link to="/home">
          <button className=" underline">go back to home page</button>
        </Link>
      </div>
    </body>
  );
}
