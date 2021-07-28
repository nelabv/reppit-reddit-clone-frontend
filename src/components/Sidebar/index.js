import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PostServices from "../../services/posts";
import {
  SidebarContainer,
  Button,
  CategoriesBar,
  Category,
  CategoryLastRow
} from "./styles";

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
    <SidebarContainer>
      <Link to="/create-post" >
          <Button isLoggedIn={isLoggedIn}>CREATE A NEW THREAD</Button>
      </Link>
        
      { catgsEmpty ? null :
        <CategoriesBar>
          <span className="bold-text">CATEGORIES</span>

          { 
            categories.map((category, index) => {
              if (index === categories.length - 1) {
                return (
                  <Link key={index} to={`/categories/${category}`} style={{textDecoration: "none"}}>
                    <CategoryLastRow>
                      <span>r/{category}</span>
                    </CategoryLastRow>
                  </Link>
                )
              } else {
                return (
                  <Link key={index} to={`/categories/${category}`} style={{textDecoration: "none"}}>
                    <Category>
                      <span>r/{category}</span>
                    </Category>
                  </Link>
              )
              }
          })
          }
        </CategoriesBar>
      }
    </SidebarContainer>
  )
}

export default Sidebar;