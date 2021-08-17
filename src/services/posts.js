import http from "../http";

class PostServices {
  getAllPosts(filters) {
    return http.get("/", filters);
  }

  getPostsByCategory(category) {
    return http.get(
      "/", 
      { params: {
        category: `${category}`
      }}
    );
  }

  getCategories() {
    return http.get("/categories");
  }

  getPostByID(id) {
    return http.get(`/${id}`)
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