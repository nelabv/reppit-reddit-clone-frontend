import React from "react";
import {
  CloseMenu,
  PopupMenu,
  Background,
  User
} from "./styles";

export default function PopupMenuMobile(props) {
  return (
    <Background onClick={props.openMenu}>
      <PopupMenu >
        <div className="content-holder">
          <User size={40}/>
            <span>{sessionStorage.getItem("name")}</span>
        </div>

        <span>LOGOUT</span>
      </PopupMenu>
    </Background>
  )
}