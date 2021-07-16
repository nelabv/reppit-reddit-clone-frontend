import http from "../http";

class PostServices {
  getAllPosts() {
    return http.get("/");
  }

  getPostsByCategory(category) {
    return http.get("/posts-category", category);
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

  castVote(voteDocument, token) {
    return http.put("/posts", voteDocument, { headers: {"Authorization" : `Bearer ${token}`} })
  }

  submitComment(commentDocument, token) {
    return http.put(`/comment/${commentDocument.postID}`, commentDocument, { headers: {"Authorization" : `Bearer ${token}`}})
  }
};

export default new PostServices();