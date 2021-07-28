import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PostServices from "../../services/posts";

function Sidebar(props) {
  const [categories, setCategories] = useState([]);
  const [catgsEmpty, setCatgsEmpty] = useState(true); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchCategories = async () => {
    const APIcall = await PostServices.getCategories();
    const categories = APIcall.data.categories;
    console.log(categories);
    setCategories(categories);
    setCatgsEmpty(false);

    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true);
      console.log("logged in");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <div className="sidebar-container">
      { isLoggedIn
          ? <Link to="/create-post" >
              <button className="btn sidebar-btn">CREATE A NEW THREAD</button>
            </Link>
          : null }
        
      { catgsEmpty ? null :
        <div className="bordered-container categories">
          <span className="bold-text">CATEGORIES</span>
          { 
            categories.map((category, index) => {
              if (index === categories.length - 1) {
                return (
                  <Link key={index} to={`/categories/${category}`} style={{textDecoration: "none"}}>
                    <div className="category last-row">
                      <span>r/{category}</span>
                    </div>
                  </Link>
                )
              } else {
                return (
                  <Link key={index} to={`/categories/${category}`} style={{textDecoration: "none"}}>
                    <div className="category">
                      <span>r/{category}</span>
                    </div>
                  </Link>
              )
              }
          })
          }
        </div>
      }
    </div>
  )
}

export default Sidebar;