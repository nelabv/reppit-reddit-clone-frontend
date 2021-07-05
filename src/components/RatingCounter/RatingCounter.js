import React from "react";
import "./styles.css";
import { AiOutlineCaretUp } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';

function RatingCounter(props) {

  console.log(props.count);

  return (
    <div className="arrow-container">
      <AiOutlineCaretUp/>
        <p>{props.count}</p>
      <AiOutlineCaretDown/>
    </div>
  );
}

export default RatingCounter;
