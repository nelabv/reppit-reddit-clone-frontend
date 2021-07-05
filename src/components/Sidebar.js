import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PostServices from "../services/posts";
import "../styling/containers.css";

function Sidebar(props) {
  const [categories, setCategories] = useState([]);
  const [catgsEmpty, setCatgsEmpty] = useState(true); 

  const fetchCategories = async () => {
    console.log("hello");
    const categories = await PostServices.getCategories();
    setCategories(categories.data);
    setCatgsEmpty(false);
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <div className="sidebar-container">
      <Link to="/create-post" >
        <button className="create-post-btn">CREATE A NEW THREAD</button>
      </Link>

      <div>
        
        { catgsEmpty ? null :
        <div className="catgs-bar">
            <h4>Categories</h4>
            { categories.map((category, index) => {
              return (
                <div key={index}>
                  <p>r/{category}</p>
                </div>
              )
            })}
        </div>
        }
      </div>
    </div>
  )
}

export default Sidebar;