import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostPreview from "../../components/PostPreview";
import PostServices from "../../services/posts";
import { GrayBackground, MaxWidth, CategoryBanner, WritePostBtn } from './styles';

function SortedThread(props) {
  const { category } = useParams();
  const [posts, setPosts] = useState(null);

  let history = useHistory();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
        history.push("/login")
    } else {
      PostServices.getPosts(category)
          .then(response => setPosts(response.data));
    }
  }, [category, history]);

	return (
    <>
          <Navbar />

          <GrayBackground>
            <MaxWidth>
                <CategoryBanner>
                  <span>{category.toUpperCase()}</span>
                </CategoryBanner>

                <WritePostBtn>
                      <Link to="/write">
                        Write Post
                      </Link>
                </WritePostBtn>

                { posts ?
                          <>
                              { posts.map((post) => {
                                return <PostPreview post={post} key={post._id}/>
                              })} 
                          </> 
                          
                            : null }
            </MaxWidth>
          </GrayBackground>

            <Footer />
    </>
	);
}

export default SortedThread;
