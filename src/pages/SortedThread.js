import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../services/posts";
import PostPreview from "../components/PostPreview";

function SortedThread(props) {
	const id = useParams();
	const [filteredPosts, setFilteredPosts] = useState([]);

	const retrieveData = async () => {
		if (sessionStorage.getItem("token")) {
			const result = await PostServices.getPostsByCategory(id.category);
			setFilteredPosts(result.data.contents);
		} else {
			window.location = "/signup";
		}
	} 

	useEffect(() => {
		retrieveData();
	})

	return (
    <>
      <div className="banner-container category-banner">
        <h2 className="thread-tag">r/{id.category}</h2>
      </div>

      <div className="default-width ">
        <div className="posts-container">
          <PostPreview 
                posts= {filteredPosts} 
                userVotedPosts={props.userVotedPosts}/>
        </div>
      </div>
    </>
	);
}

export default SortedThread;
