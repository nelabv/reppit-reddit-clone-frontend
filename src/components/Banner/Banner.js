import React from 'react';
import { Link } from "react-router-dom";
import "../../styling/containers.css";
import "../../styling/elements.css";

function Banner(props) {
  return (
    <section className="left-container banner-container">
      <h1>Join a conversation today</h1>
      <span>Some cool subtext here</span>


      <Link to="/login" style={{textDecoration: "none"}}>
        <button className="btn btn-4">JOIN NOW</button>
      </Link>
    </section>
  )
}

export default Banner;