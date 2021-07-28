import React from 'react';
import { BannerContainer } from './styles';

export default function Banner(props) {
  return (
    <BannerContainer 
      className="banner-container"
      user={props.user} >
        <h1>Join a conversation today</h1>
        <span>Some cool subtext here</span>
    </BannerContainer>
  )
}