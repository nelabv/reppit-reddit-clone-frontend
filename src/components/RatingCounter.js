import React, { useState, useEffect } from "react";
import { AiOutlineCaretUp } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';

function RatingCounter(props) {
  let [voteCount, setVoteCount] = useState(props.count);
  const [arrowColorTrue, setArrowColorTrue] = useState("default-arrow");
  const [arrowColorFalse, setArrowColorFalse] = useState("default-arrow");

  const testForArrowClassname = () => {
    if (sessionStorage.getItem("token")) {
      let voteArray = props.userVotedPosts;
      const checkIfPostHasVote = voteArray.filter(object => object.post === props.id);

      if (checkIfPostHasVote.length > 0) {
        let post = checkIfPostHasVote[0];

        if (post.vote === "false") {
          setArrowColorFalse("testing-false")
        } else if (post.vote === "true") {
          setArrowColorTrue("testing-true")
        }
      } else if (!checkIfPostHasVote === 0) {
        return
      }
    } else {
      return
    }
  }
  
  const calculateUpvotes = (total, down) => {
    let rating = total - down;
    setVoteCount(rating);
  }

  useEffect(() => {
    calculateUpvotes(props.total, props.down);
    testForArrowClassname();
  })
  
  return (
    <div className="arrow-container">
      <AiOutlineCaretUp 
          size={20} 
          className={arrowColorTrue}
      />
            <p>{voteCount}</p>
      <AiOutlineCaretDown 
          size={20} 
          className={arrowColorFalse}
      />
    </div>
  );
}

export default RatingCounter;
