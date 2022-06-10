import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams, useHistory } from "react-router-dom";
import PostServices from "../../services/posts";
import FullViewPost from "../../components/FullViewPost";
import Footer from "../../components/Footer";
import { GradientBackground, Container } from "./styles";

export default function PostFullRead(props) {
  const [ post, setPost ] = useState();
  const [ isLoading, setIsLoading ] = useState(true);

  const { id } = useParams();

  let history = useHistory();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
        history.push("/login")
    } else {
      PostServices.getPostById(id, sessionStorage.getItem("token"))
          .then(response => {
            setPost(response.data.retrievedPost[0]);
            setIsLoading(false);
          }) 
    }}, [id, history]);

  return ( 
    <> 
        <Navbar />

        <GradientBackground>
          <Container>
                { isLoading ? <div>Loading</div>
                        : <FullViewPost post={post} /> }
              


          </Container>

        </GradientBackground>

        <Footer />
    </>
  );
}
