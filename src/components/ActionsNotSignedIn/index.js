import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Menu,
  Button
} from "./styles"

export default function ActionsNotSignedIn(props) {
  const actions = [{
      name: "Login",
      link: "/login"
    }, {
      name: "Signup",
      link: "/signup"
  }];

  return (
    <Nav>
      <ul className="items-list">
        { actions.map((action, index) => {
          return (
            <Link to={action.link} style={{textDecoration: "none"}} key={index}>
              <li>
                <Button>{action.name}</Button>
              </li>
            </Link>
          )
        })}
      </ul>

      <div className="mobile-menu-container">
        <Menu size={25} onClick={props.openMenu}/>
      </div>
    </Nav>
  )

}