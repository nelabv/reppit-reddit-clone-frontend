import React from 'react';
import {
  LoadingContainer,
  HourglassIcon
} from "./styles";

export default function Loading(props) {
  const {loadingMessage} = props;
  
  return (
    <LoadingContainer>
      <div className="content-wrapper">
        <HourglassIcon size={50} />
        <span>{loadingMessage}</span>
      </div>
    </LoadingContainer>
  )
}