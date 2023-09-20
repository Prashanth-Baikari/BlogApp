import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './Comment';

@Injectable({
  providedIn: 'root'
})
export class PostcommentService {
  private baseURL="http://localhost:8008";

  constructor(private httpclient: HttpClient) { }

  postComment(comment: Comment,pid:any):Observable<object>{
    let uid=localStorage.getItem(`id`);
    let headers= new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem(`token`)}`)
    return this.httpclient.post(`${this.baseURL}/postcomment/${uid}/${pid}`, comment, {headers});
  }
}
