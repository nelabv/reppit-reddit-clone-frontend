import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
  GradientBackground,
  MaxWidth
} from "./styles";
import WritePostForm from "../../components/WritePostForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function SubmitPost() {
  let history = useHistory();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      history.push("/login")
    } 
  }, [history, token])

  return (
    <>
          <Navbar isNavTransparent={false} />

          <GradientBackground>
            <MaxWidth>

                <h2 className="header-text">Submit a post</h2>

                <WritePostForm />
            </MaxWidth>
          </GradientBackground>

          <Footer />
    </>

  );

}

export default SubmitPost;
