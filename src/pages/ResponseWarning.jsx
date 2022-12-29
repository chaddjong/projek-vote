import React from "react";
import { Link } from "react-router-dom";
export default function warning() {
  return (
    <body>
      <div className="bg-white flex flex-col justify-center items-center h-[100vh] w-[100%]">
        <div className="text-center text-[5vw] lg:text-[3vw] font-bold">
          <p>YOU HAD ALREADY</p>
          <p>FILLED THIS FORM.</p>
          <p>YOU CAN ONLY FILL</p>
          <p>THIS FORM ONCE</p>
          <br />
          <Link to="/home">
            <button className=" underline">go back to home page</button>
          </Link>
        </div>
      </div>
    </body>
  );
}
