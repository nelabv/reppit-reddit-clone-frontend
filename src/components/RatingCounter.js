import React, { useState, useEffect } from "react";
import PostServices from "../services/posts";
import { AiOutlineCaretUp } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';

function RatingCounter(props) {
  let [voteCount, setVoteCount] = useState(props.count);
  
  const calculateUpvotes = (total, down) => {
    let rating = total - down;
    setVoteCount(rating);
  }

  const handleVote = async (_vote) => {
    const voteDoc = {
      id: props.id,
      vote: _vote
    }
    const castVote = await PostServices.castVote(voteDoc, localStorage.getItem("token"));

    if (castVote.status === 200) {
      if (_vote === true) {
        console.log(voteCount);
      } else if (_vote === false) {
      } 
    }
  }

  useEffect(() => {
    calculateUpvotes(props.total, props.down);
  })
  
  return (
    <div className="arrow-container">
      <AiOutlineCaretUp onClick={() => {handleVote(true)}}/>
        <p>{voteCount}</p>
      <AiOutlineCaretDown onClick={() => {handleVote(false)}}/>
    </div>
  );
}

export default RatingCounter;
