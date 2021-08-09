import React, { useState, useEffect } from "react";
import PostServices from "../../services/posts";
import Utilities from "../../services/utils";
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
      
      const castVote = await PostServices.castVote(vote, sessionStorage.getItem("token"));
      let status = await castVote.data.status;
      console.log(status);

      if (status === "added record" || "change vote") {
        setVoteCount(prevState => prevState + 1)
      } if (status === "unvote") {
        setVoteCount(prevState => prevState - 1)
      }
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

      const castVote = await PostServices.castVote(vote, sessionStorage.getItem("token"));
      let status = await castVote.data.status;
      console.log(status);

      if (status === "added record" || "change vote") {
        setVoteCount(prevState => prevState - 1)
      } if (status === "unvote") {
        setVoteCount(prevState => prevState + 1)
      }
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
        const vote = await Utilities.initArrowColor(props.id, sessionStorage.getItem("token"));

        if (vote === true) {
          setTrueActive(true);
        } else if (vote === false) {
          setFalseActive(true);
        } else if (vote === null) {
          return
        } 
      } else {
        return
      }
    }

    initializeData();
  }, [])
  
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
