import React, { useState } from "react";
import Close from "../img/close.svg"

export default function DeleteModal() {
    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setModal(!modal);
    }
  return (
    <>
      <div>
        
      </div>
    </>
  );
}
