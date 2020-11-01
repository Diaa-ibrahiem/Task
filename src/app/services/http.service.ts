import { environment as env } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  constructor(private http: HttpClient) {}
  urlPost:string = 'https://jsonplaceholder.typicode.com/posts';
  urlComments:string ='https://jsonplaceholder.typicode.com/comments'

  getPosts() {
    return this.http.get(this.urlPost);
  }

  CreatePosts(Post) {
    return this.http
      .post(
        this.urlPost,
        { Post }
      )
  }

  deletePost(postID) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  }

  UpdatePost(postId,post) {
    return this.http.put(`${this.urlPost}/${postId}`, { datanew: post });
  } 
  
  getComments() {
    return this.http.get(this.urlComments);
  }

  
  CreateComment(comment) {
    console.log(comment);
     return this.http.post('https://jsonplaceholder.typicode.com/comments',comment);
  }

  deleteComment(commentID) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/comments/${commentID}`);
  }

  UpdateComment(commentId,comment) {
    return this.http.put(`${this.urlComments}/${commentId}`, { datanew: comment });

  }
}
