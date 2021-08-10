import React from "react";
import { Link } from "react-router-dom";
import {
  PopupMenu,
  Background,
  User,
  Action,
  Button,
  ButtonContainer
} from "./styles";

export default function PopupMenuMobile(props) {
  return (
    <Background onClick={props.openMenu}>
      <PopupMenu >
        { sessionStorage.getItem("name") 
          ?   <div className="content-holder">
                <User size={40}/>
                <span>{sessionStorage.getItem("name")}</span>

                <Action onClick={props.logout}>Logout</Action>
              </div>
          :   <ButtonContainer>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                
                <Link to="/signup">
                    <Button>Signup</Button>
                </Link>
              </ButtonContainer>
      
      
        }
      </PopupMenu>
    </Background>
  )
}