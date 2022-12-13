import React from "react";

function PublicFormThumbnail() {
    return(
        <div className="flex justify-center bg-white w-[150px] h-[130px] rounded-2xl hover:bg-[#FFB546] mx-3 mt-5">
            <button className="flex flex-col justify-center items-center">
                <h3>Form Title</h3>
                <p>Author</p>
            </button>
        </div>
    );
}

export default PublicFormThumbnail;