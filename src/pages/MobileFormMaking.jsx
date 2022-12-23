import React, { useState } from "react";
import BackArrow from "../img/arrow_back.svg";
import Add from "../img/add.svg";
import NextArrow from "../img/arrow_forward.svg";
import Delete from "../img/delete.svg";
import QuestionCard from "../components/QuestionCard";
import Modal from "../components/Modal";
import Share from "../components/Share";
import { Link } from "react-router-dom";
// import "./bgform.css";

function MobileFormMaking() {
  const [openmodal, setOpenModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!openmodal);
  // };

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
    <body className="bg-[#D9D9D9] pb-5 body-back">
      <div className="flex justify-end items-end w-[100%] h-[100%]">
        <div class="mr-20 lg:hidden">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className=" bg-[#EBEBEB] p-5 mt-[89vh] rounded-full shadow-[0_1.5px_7.3px_3.3px_rgba(0,0,0,0.25)] fixed z-20 active:bg-orange-400"
          >
            <img src={NextArrow} />
          </button>
          {openmodal && (
            <div className="bg-[#0000004a] fixed top left-0 right-0 bottom-0 w-[100vw] h-[100vh] flex justify-center items-center">
              <div className="">
                <Share closeModal={setOpenModal} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center max-[1023px]:gap-5">
          <div className=" bg-white w-full lg:w-[30%] h-44 rounded-b-2xl lg:mb-6">
            <div>
              <Link to="/home">
                <button class="h-[4vh] w-[8%] sm:w-[5%] lg:w-[2.5%] m-4">
                  <img src={BackArrow} class="h-[4vh] w-[100%]" />
                </button>
              </Link>
            </div>
            <div className="mt-5 ml-5 lg:mt-8">
              <input
                placeholder="Untitled form"
                className="text-black placeholder:text-black placeholder:font-normal w-[95%] text-4xl focus:outline-none lg:text-[2vw]"
              ></input>
              <br></br>
              <input
                placeholder="add a description"
                className="placeholder:text-black placeholder:font-normal placeholder:opacity-50 text-base leading-6 focus:outline-none ml-1 w-[95%] lg:text-[1vw]"
              ></input>
            </div>
          </div>
          <QuestionCard />
          <QuestionCard />
          {val.map((data, i) => {
            return (
              <div className="flex flex-col w-[100%] justify-center items-center">
                <div class="h-auto relative top-10 left-[44%]">
                  <button onClick={() => handleDelete(i)} className="">
                    <img src={Delete} />
                  </button>
                </div>
                <QuestionCard onChange={(e) => handleChange(e, i)} />
              </div>
            );
          })}
          <div class="bg-white lg:mt-6  w-[97%] lg:w-[29%] h-[18vh] rounded-2xl flex flex-col justify-center items-center">
            <button
              id="btn_add"
              onClick={() => handleAdd()}
              class="w-[100%] h-[18vh] rounded-2xl flex flex-col justify-center items-center"
            >
              <img src={Add} class="h-[6vh] w-[8%]" />
            </button>
          </div>
        </div>
        <div class="h-[5vh] w-[100%] flex justify-start items-center max-[1023px]:hidden">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            class="h-[5vh] w-[8%] lg:mt-6 bg-white rounded-lg ml-[5%] lg:ml-[35.5%] hover:bg-orange-300 active:bg-orange-400"
          >
            Done
          </button>
          {openmodal && (
            <div className="bg-[#0000004a] fixed top left-0 right-0 bottom-0 w-[100vw] h-[100vh] flex justify-center items-center">
              <div className="">
                <Share closeModal={setOpenModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </body>
  );
}

export default MobileFormMaking;
