import React from 'react';
import { FooterBg, Container } from './styles';

import { AiFillGithub } from "react-icons/ai"


function Footer() {
  return(
    <FooterBg>
      <Container>
        <div>
            <AiFillGithub 
              size={'1.5em'}
              style={{
                color: "white",
              }}/>
            <a href="https://www.github.com/nelabv" target="_blank" rel="noreferrer">nelabv</a>
        </div>
          
          
        <span>2021</span>
      </Container>

    </FooterBg>
  )
}

export default Footer;