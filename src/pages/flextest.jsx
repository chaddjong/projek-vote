import React from "react";
import QuestionCard from "../components/QuestionCard";
import BackArrow from "../img/arrow_back.svg";

function Testing() {
  return (
    <div>
      <select id="share-period">
        <option value="oneweek" selected>
          One Week
        </option>
        <option value="24hours">24 hours</option>
      </select>
    </div>
  );
}

export default Testing;
