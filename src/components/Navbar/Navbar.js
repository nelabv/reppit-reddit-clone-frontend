import { Link} from "react-router-dom";
import "../../styling/elements.css";
import "../../styling/containers.css";

function Navbar(props) {

  return (
    <nav className="navbar">
        <a href="/">redditclone</a>

        { props.user ? 
        <div className="navbar-actions">
          <div className="navbar-user">
            <p>Hello, </p><p className="user-tag">{props.user}</p>
          </div>
          <button className="btn btn-2" onClick={props.logout}>Log out</button> 
        </div> :

        <div className="navbar-actions">
          <Link to="/login" style={{textDecoration: "none"}}>
          <button className="btn btn-2">Login</button>
          </Link>
          <Link to="/signup" style={{textDecoration: "none"}}>
            <button className="btn">Sign up</button>
          </Link>
        </div>
        }
    </nav>
  );
}

export default Navbar;
