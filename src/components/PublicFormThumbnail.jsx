import React from "react";

function PublicFormThumbnail() {
  return (
    <div
      id="btn_PbcForm"
      className="flex justify-center bg-white w-[41%] h-[13vh] lg:h-[19vh] rounded-2xl hover:bg-[#FFB546] mx-[4.2%] mt-5 lg:bg-[#d9d9d9] active:bg-orange-400"
    >
      <button className="flex flex-col justify-center items-center">
        <h3>Form Title</h3>
        <p>Author</p>
      </button>
    </div>
  );
}

export default PublicFormThumbnail;
