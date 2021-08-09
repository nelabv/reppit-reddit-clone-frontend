import React, { useState, useEffect } from "react";
import PostServices from "../../services/posts";
import {
  Container,
  UpArrow,
  DownArrow
} from "./styles"

function RatingCounter(props) {
  let [voteCount, setVoteCount] = useState(props.count);
  const [trueActive, setTrueActive] = useState(false);
  const [falseActive, setFalseActive] = useState(false);

  const upvotePost = async () => {
    if (sessionStorage.getItem("token")) {
      setFalseActive(false);
      setTrueActive(!trueActive);

      let vote = {
        id: props.id,
        vote: true
      }
      
      await PostServices.castVote(vote, sessionStorage.getItem("token"));
    } else {
      console.log("Not logged in");
    }
  }

  const downvotePost = async () => {
    if (sessionStorage.getItem("token")) {
      setTrueActive(false);
      setFalseActive(!falseActive);

      let vote = {
        id: props.id,
        vote: false
      }
      await PostServices.castVote(vote, sessionStorage.getItem("token"));
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
    
    async function initializeData() {
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
          
        }
      } else {
        return
      }
    }

    initializeData();
  }, [props.total, props.down, props.userVotedPosts, props.id])
  
  return (
    <Container>
      <UpArrow 
          size={20} 
          onClick={upvotePost}
          trueactive={trueActive.toString()}
      />
          <p id="total-score">{voteCount}</p>
      <DownArrow 
          size={20} 
          onClick={downvotePost}
          falseactive={falseActive.toString()}
      />
           
    </Container>
  );
}

export default RatingCounter;
