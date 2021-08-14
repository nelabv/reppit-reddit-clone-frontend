import React from 'react';
import {
  LoadingContainer,
  HourglassIcon
} from "./styles";

export default function Loading(props) {
  return (
    <LoadingContainer>
      <div className="content-wrapper">
        <HourglassIcon size={50} />
        <span>{props.loadingMessage}</span>
      </div>
    </LoadingContainer>
  )
}