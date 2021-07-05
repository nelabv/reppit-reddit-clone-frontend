import React from 'react';
import { Link } from "react-router-dom";
import "../styling/containers.css";
import "../styling/elements.css";

function Banner(props) {
  const handleClick = () => {
    console.log("hello");
  }

  return (
    <section className="left-container banner-container">
      <h1>Join a conversation today</h1>
      <span>Some cool subtext here</span>


      <Link to="/signup" style={{textDecoration: "none"}}>
        <button className="btn btn-4">Sign up</button>
      </Link>

      <div className="pattern-container-1"></div>
      <div className="pattern-container-2"></div>
      <div className="pattern-container-3"></div>
    </section>
  )
}

export default Banner;