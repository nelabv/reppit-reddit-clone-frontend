import http from "../http";

class PostServices {
  getAllPosts() {
    return http.get("/");
  }

  getCategories() {
    return http.get("/categories");
  }

  getPostByID(id, token) {
    return http.get(`/${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
  }
  
  submitPost(post, token) {
    return http.post("/posts", post, { headers: {"Authorization" : `Bearer ${token}`} });
  }

  upvoteDownvote(rateInfo, token) {
    return http.put("/posts", rateInfo, { headers: {"Authorization" : `Bearer ${token}`} })
  }

  submitComment(commentDocument, token) {
    return http.put(`/comment/${commentDocument.postID}`, commentDocument, { headers: {"Authorization" : `Bearer ${token}`}})
  }
};

export default new PostServices();