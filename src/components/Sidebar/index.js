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
  const [cancelled, setCancelled] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (cancelled === false) {
      PostServices.getCategories().then((res, err) => {
        if (err) return;
        setCategories(res.data.categories);
      })

      if (sessionStorage.getItem("token")) {
        setAuth(true);
      }
    }
    return () => {
      setCancelled(true)
    }
  }, [cancelled])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setAuth(true);
    }
  }, [])

  return (
    <SidebarContainer>
      <Link to="/create-post">
        <Button auth={auth}>CREATE A NEW THREAD</Button>
      </Link>
      
      <CategoriesBar>
        
        <span className="bold-text">CATEGORIES</span>
        { categories.map((category, index) => {
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
    </SidebarContainer>
  )
}

export default Sidebar;