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
        <div className="catgs-bar">
          <h4>Categories</h4>
          { 
            categories.map((category, index) => {
              return (
                <div key={index}>
                  <p>r/{category}</p>
                </div>
            )})
          }
        </div>
      }
    </div>
  )
}

export default Sidebar;