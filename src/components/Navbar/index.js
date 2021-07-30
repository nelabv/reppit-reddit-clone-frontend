import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Header,
  Button,
  Menu,
  CloseMenu,
  PopupMenu,
  BackgroundPopup
} from "./styles";
import logo from "../../assets/tidbit.png";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Header>
          <Link to="/">
            <img src={logo} alt="Tok logo 2021" className="logo-svg"></img>
          </Link>


          <div className="actions-container">
          { props.user 
            ?   
              <>
                <div className="actions-signed-in">
                  <div className="user-greet">
                    <span style={{color: "white"}}>Hello, </span><span className="user-tag">{props.user}</span>
                  </div>

                  <Button onClick={props.logout}>Log out</Button> 
                </div>

                <div className="mobile-nav-logged-in">
                  <span className="user-tag">{props.user}</span>
                  <Menu size={25} onClick={openMenu}/>

                </div>
              </>

            :   <nav className="actions-no-user">
                  <ul>
                    <Link to="/login" style={{textDecoration: "none"}}>
                      <li style={{color: "white"}}>Login</li>
                    </Link>
                    <Link to="/signup" style={{textDecoration: "none"}}>
                      <li>
                        <Button className="btn nav-btn">Sign up</Button>
                      </li>
                    </Link>
                  </ul>
                </nav>
          }
          </div>
      </Header>


      { isOpen ?
            <BackgroundPopup>
                <PopupMenu >
                  elooo
                  <CloseMenu onClick={openMenu} />
                </PopupMenu>
            </BackgroundPopup>
              : null
      }
    </>
  );
}

export default Navbar;
