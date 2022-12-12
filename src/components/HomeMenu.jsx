import React from "react";

function HomeMenu() {
  return (
    <div className="flex flex-col justify-center items-center">
      <form action="">
        <input
          placeholder="Token"
          className="border-black text-black border-[2px] font-inter font-medium rounded-2xl p-[15px] text-lg w-[320px] mt-[20px] py-4"
        ></input>
      </form>
      <div className="flex flex-row justify-center items-center mt-[30px] gap-[13px]">
        <button className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl hover:bg-[#FFB546]">
          <p>See Form Responds</p>
        </button>
        <button className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl hover:bg-[#FFB546]">
          <p>Create <br/> Form</p>
        </button>
        {/* <div className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl">
          <p>See Form <br/>Responds</p>
        </div>
        <div className="flex justify-center items-center bg-[#D9D9D9] w-[150px] h-[80px] rounded-[14.64px] font-inter font-[600] text-xl">
          <p>Create <br/>Form</p>
        </div> */}
      </div>
    </div>
  );
}

export default HomeMenu;
