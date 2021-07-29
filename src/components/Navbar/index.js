import { Link } from "react-router-dom";
import { 
  Header,
  Button,
  Menu
} from "./styles";
import logo from "../../assets/logo.png";

function Navbar(props) {

  return (
    <Header>
        <a href="/">
          <img src={logo} alt="Tok logo 2021"></img>
        </a>

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
                <Menu size={25} />
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
    </Header>
  );
}

export default Navbar;
