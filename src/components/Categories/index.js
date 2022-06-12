import React, { useEffect, useState } from "react";
import PostServices from "../../services/posts";
import { CategoriesContainer, Category } from "./styles";
import { Link } from "react-router-dom";

export default function Categories(props) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
      PostServices.fetchAllPostCategories()
          .then(response => {
            setCategories(response.data.categories)
          })
  }, [])
  
  return (
    <CategoriesContainer>
      <span>Categories</span>
          { categories ? categories.map((category) => {
            return (
              <Category key={category}>
                    <Link to={`/categories/${category}`} >
                      {category.toUpperCase()}
                    </Link>
              </Category>
            )
          }) : null}
    </CategoriesContainer>
  )
}