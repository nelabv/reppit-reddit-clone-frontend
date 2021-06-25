import React from "react";
import "./styles.css";
import { AiOutlineCaretUp } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';

function RatingCounter(props) {

  const handleRating = (vote) => {
    //console.log(vote);
  }

  return (
    <div className="arrow-container">
      <AiOutlineCaretUp onClick={() => {handleRating(true)}}/>
        <p>0</p>
      <AiOutlineCaretDown onClick={() => {handleRating(false)}}/>
    </div>
  );
}

export default RatingCounter;
