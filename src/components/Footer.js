import React from 'react';

import { AiFillGithub } from "react-icons/ai"

import "../styling/containers.css";

function Footer() {

  return(
    <div className="footer">
      <div className="github">
        <AiFillGithub 
          size={'1.5em'}
          style={{
            color: "white",
          }}/>
        <a href="https://www.github.com/nelabv" target="_blank" rel="noreferrer">nelabv</a>
      </div>

      <span>2021</span>
    </div>
  )
}

export default Footer;