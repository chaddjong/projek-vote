import React, { useState } from "react";
import Option from "../components/Option";
import Close from "../img/close.svg";
import AddPhoto from "../img/addphoto.svg";

function QuestionCard() {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangevalue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangevalue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i);
    setVal(deletVal);
  };
  console.log(val, "data-");
  return (
    <body>
      <div className="max-[1023px]:hidden flex flex-col bg-white w-[97%] lg:w-[100%] h-max rounded-xl p-4">
        <input
          id="question"
          placeholder="Untitled question"
          className="border-black border-b-[1.46px] focus:outline-none placeholder-black text-xl pb-2 lg:text-[2vw]"
          requiredhhin
        ></input>
        <div className="flex flex-start mt-[1em] ml-[0.5em] mb-4">
          <button
            type="file"
            className="text-[3vw] bg-[#D9D9D9] px-[8px] py-[6px] rounded-[5px] lg:text-[1.5vw] sm:text-[18px] md:text-[20px]"
          >
            <input
              type="file"
              id="file"
              className="w-auto h-auto hidden"
              accept="image/*"
            />
            <label for="file">Add image</label>
          </button>
        </div>
        {val.map((data, i) => {
          return (
            <div className="flex items-center w-[95%] h-max gap-5 mb-5">
              <Option onChange={(e) => handleChange(e, i)} />
              <form className=" flex justify-end items-center w-[100%] gap-5">
                <button class="-mt-[2vh]">
                  <img src={AddPhoto} />
                </button>
                <button onClick={() => handleDelete(i)} class="-mt-[2vh]">
                  <img src={Close} />
                </button>
              </form>
            </div>
          );
        })}
        <button
          onClick={() => handleAdd()}
          className="flex w-max text-[#898989] ml-1 lg:text-[1.5vw]"
        >
          add option
        </button>
      </div>

      {/* mobile layout */}
      <div className="lg:hidden bg-white w-[97vw] h-max rounded-[11px] flex flex-col">
        <div className="flex flex-col mt-[3.5vh] ml-[3vw] mb-[2vh]">
          <input
            id="question"
            placeholder="Untitled Question"
            className="border-black border-b-[2px] focus:outline-none placeholder-[#898989] text-[6vw] pb-[0.5vh] w-[90vw]"
          ></input>
          <button
            type="file"
            className="bg-[#64ACFF] w-[22.5vw] h-[5vh] text-[3vw] text-white mt-[3vh] ml-[3vw] rounded-[6px]"
          >
            <input
              type="file"
              id="file"
              className="w-auto h-auto hidden"
              accept="image/*"
            />
            <label for="file">Add image</label>
          </button>
        </div>
        <div>
          <Option />
        </div>
        <button className="mr-[65vw] text-[#898989] mb-[2vh]">
          add option
        </button>
      </div>
    </body>
  );
}

export default QuestionCard;
