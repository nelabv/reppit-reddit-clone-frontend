import { Link} from "react-router-dom";
import "../../styling/elements.css";
import "../../styling/containers.css";
import logo from "../../assets/logo.png";

function Navbar(props) {

  return (
    <header className="navbar">
        <a href="/">
          <img src={logo} alt="Tok logo 2021" className="logo"></img>
        </a>

        { props.user ? 
        <div className="navbar-actions">
          <div className="navbar-user">
            <span style={{color: "white"}}>Hello, </span><span className="user-tag">{props.user}</span>
          </div>
          <button className="btn" onClick={props.logout}>Log out</button> 
        </div> :

        <nav>
          <ul className="navbar-actions">
            <Link to="/login" style={{textDecoration: "none"}}>
              <li className="clickable-text">Login</li>
            </Link>
            <Link to="/signup" style={{textDecoration: "none"}}>
              <li>
                <button className="btn">Sign up</button>
              </li>
            </Link>
          </ul>
        </nav>
        }
    </header>
  );
}

export default Navbar;
