import http from "../http";

class PostServices {
  getPosts(filter) {
    if (filter) {
      return http.get(`/posts?category=${filter}`);
    } else if (!filter) {
      return http.get("/posts");
    }
  }

  createPost(post, token) {
    return http.post("/posts", post, {
       headers: {"Authorization" : `Bearer ${token}`}
    });
  }

  castVote(vote, token) {
    return http.put("/posts", vote, { 
      headers: {"Authorization" : `Bearer ${token}`}
    })
  }

  getPostById(id, token) {
    return http.get(`/posts/${id}`, { headers: {"Authorization" : `Bearer ${token}`} })
  }

  deletePost(id, token) {
    return http.delete(`/posts/${id}`, { 
      headers: { "Authorization" : `Bearer ${token}`}
    })
  }

  addComment(commentBody, token) {
    return http.put(`/posts/comment/${commentBody.id}`, { 
      headers: { "Authorization" : `Bearer ${token}`}
    })
  }

  fetchAllPostCategories() {
    return http.get("/posts/categories")
  }
};

export default new PostServices();