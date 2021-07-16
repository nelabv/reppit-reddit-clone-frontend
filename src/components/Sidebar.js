import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PostServices from "../services/posts";
import "../styling/containers.css";
import "../styling/elements.css";

function Sidebar(props) {
  const [categories, setCategories] = useState([]);
  const [catgsEmpty, setCatgsEmpty] = useState(true); 

  const fetchCategories = async () => {
    const APIcall = await PostServices.getCategories();
    const categories = APIcall.data.categories;
    console.log(categories);
    setCategories(categories);
    setCatgsEmpty(false);
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <div className="sidebar-container">
      <Link to="/create-post" >
        <button className="btn btn-5">CREATE A NEW THREAD</button>
      </Link>

        
      { catgsEmpty ? null :
        <div className="categories">
          <span className="categories-tag">Categories</span>
          { 
            categories.map((category, index) => {
              return (
                <Link key={index} to={`/categories/${category}`} style={{textDecoration: "none"}}>
                  <div className="category-row">
                    <span>r/{category}</span>
                  </div>
                </Link>
            )})
          }
        </div>
      }
    </div>
  )
}

export default Sidebar;