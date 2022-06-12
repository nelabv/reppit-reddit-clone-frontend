                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";
import { 
  Nav,
  NavBg
} from "./styles";
import PopupMenuMobile from "../PopupMenuMobile";

function Navbar(props) {
  const { isNavTransparent } = props;
  const [userProfile] = useContext(UserContext);
  
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prevState) => !prevState);
  }

  const handleLogout = () => {
    sessionStorage.clear();

    window.location.reload();
  }

  return (
    <>
      { isOpen 
          ? <PopupMenuMobile 
              openMenu={openMenu} 
              logout={props.logout}/> 
          : null }

      <NavBg isNavTransparent={isNavTransparent}>
            <Nav isNavTransparent>
                <Link to="/">
                  <span>LOGO</span>
                </Link>


                { userProfile ? <span onClick={handleLogout}>Logout</span> : null }
            </Nav>
      </NavBg>
    </>
  );
}

export default Navbar;
