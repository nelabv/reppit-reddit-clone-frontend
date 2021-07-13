import React, { useState, useEffect } from "react";
import PostServices from "../services/posts";
import { AiOutlineCaretUp } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';

function RatingCounter(props) {
  let [voteCount, setVoteCount] = useState(props.count);
  const [trueActive, setTrueActive] = useState(false);
  const [falseActive, setFalseActive] = useState(false);

  const upvotePost = async () => {
    if (sessionStorage.getItem("token")) {
      let vote = {
        id: props.id,
        vote: true
      }
      const castVote = await PostServices.castVote(vote, sessionStorage.getItem("token"));
      let voteStatus = castVote.data.status;
      console.log(voteStatus);

      setFalseActive(false);
      setTrueActive(!trueActive);
      console.log(trueActive);
    } else {
      console.log("Not logged in");
    }
  }

  const downvotePost = async () => {
    if (sessionStorage.getItem("token")) {
      let vote = {
        id: props.id,
        vote: false
      }
      const castVote = await PostServices.castVote(vote, sessionStorage.getItem("token"));
      let voteStatus = castVote.data.status;
      console.log(voteStatus);

      setTrueActive(false);
      setFalseActive(!falseActive);
      console.log(falseActive);
    } else {
      console.log("Not logged in");
    }
  }
  
  const calculateUpvotes = (total, down) => {
    let rating = total - down;
    setVoteCount(rating);
  }

  useEffect(() => {
    calculateUpvotes(props.total, props.down);
    
    if (sessionStorage.getItem("token")) {
      let voteArray = props.userVotedPosts;
      const checkIfPostHasVote = voteArray.filter(object => object.post === props.id);

      if (checkIfPostHasVote.length > 0) {
        let post = checkIfPostHasVote[0];

        if (post.vote === false) {
          setFalseActive(true)
        } else if (post.vote === true) {
          setTrueActive(true);
        }
      } else if (checkIfPostHasVote.length === 0) {
        console.log("No voted posts found");
      }
    } else {
      return
    }
  }, [props.total, props.down, props.userVotedPosts, props.id])
  
  return (
    <div className="arrow-container">
      <AiOutlineCaretUp 
          size={20} 
          className={trueActive ? "upvoted" : "default-arrow"}
          onClick={upvotePost}
      />
          <p>{voteCount}</p>
      <AiOutlineCaretDown 
          size={20} 
          className={falseActive ? "downvoted" : "default-arrow"}
          onClick={downvotePost}
      />
           
    </div>
  );
}

export default RatingCounter;
