import React, { useState, useEffect } from "react";
import PostServices from "../../services/posts";
import Utilities from "../../services/utils";
import {
  Container,
  UpArrow,
  DownArrow
} from "./styles"

function RatingCounter(props) {
  const { total, down, id } = props;

  let [voteCount, setVoteCount] = useState();
  const [upvotecolor, setUpvoteColor] = useState(false);
  const [downvotecolor, setDownvoteColor] = useState(false);
  
  const upvotePost = async () => {
    console.log('Upvote');
    if (sessionStorage.getItem("token")) {
      setDownvoteColor(false);
      setUpvoteColor(!upvotecolor);

      if (upvotecolor === false) {
        setVoteCount(voteCount + 1)
      } else {
        setVoteCount(voteCount - 1)
      }

      const vote = { id: id, vote: true }
      
      PostServices.castVote(vote, sessionStorage.getItem("token"));
    } else {
      console.log("Not logged in");
    }
  }

  const downvotePost = async () => {
    if (sessionStorage.getItem("token")) {
      setUpvoteColor(false);
      setDownvoteColor(!downvotecolor);

      if (downvotecolor === true) {
        setVoteCount(voteCount + 1)
      } else {
        setVoteCount(voteCount - 1)
      }

      let vote = {
        id: props.id,
        vote: false
      }

      PostServices.castVote(vote, sessionStorage.getItem("token"));
    } else {
      console.log("Not logged in");
    }
  }

  useEffect(() => {
    setVoteCount(total - down);
  }, [down, total])

  useEffect(() => {
    async function initializeData() {
      if (sessionStorage.getItem("token")) {
        const vote = await Utilities.initArrowColor(id, sessionStorage.getItem("token"));

        if (vote === true) {
          setUpvoteColor(true);
        } else if (vote === false) {
          setDownvoteColor(true);
        } else if (vote === null) {
          return
        } 
      }
    }
    initializeData();
  }, [down, id, total])
  
  return (
    <Container>
      <UpArrow 
          size={20}
          onClick={upvotePost}
          upvotecolor={upvotecolor.toString()} />

          <p id="total-score">{voteCount}</p>
      <DownArrow 
          size={20}  
          onClick={downvotePost}
          downvotecolor={downvotecolor.toString()}/>
           
    </Container>
  );
}

export default RatingCounter;