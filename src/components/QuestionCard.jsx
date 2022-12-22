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
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  console.log(val, "data-");
  return (
    <div className="flex flex-col bg-white w-[97%] h-max rounded-xl p-4">
      <input
        id="question"
        placeholder="Untitled question"
        className="border-black border-b-[1.46px] focus:outline-none placeholder-black text-xl pb-2 lg:text-3xl"
        requiredhhin
      ></input>
      <div className="flex flex-start mt-[1em] ml-[0.5em] mb-4">
        <button
          type="file"
          className="text-[3.5vw] bg-[#D9D9D9] px-[14px] py-[10px] rounded-[5px] lg:text-xl sm:text-[18px] md:text-[20px]"
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
        className="flex w-max text-[#898989] ml-1 lg:text-xl"
      >
        add option
      </button>
    </div>
  );
}

export default QuestionCard;
