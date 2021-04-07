import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostPayload} from './add-post/post-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(postPayload: PostPayload){
    return this.httpClient.post('http://localhost:8080/api/posts/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all");
  }

  getPost(permaLink: Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink);
  }

  getPostsByusername(permaLink: String):Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>('http://localhost:8080/api/posts/getByUsername/' + permaLink);
  }

  deletePost(permaLink: Number,username: String ){
    debugger;
    let endPoints = '/delete/' + permaLink;
    return this.httpClient.delete('http://localhost:8080/api/posts' + endPoints);
  

   // return this.httpClient.delete('http://localhost:8080/api/posts/delete/' + permaLink);
  }
}

