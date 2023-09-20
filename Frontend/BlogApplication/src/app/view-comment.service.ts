import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './Comment';

@Injectable({
  providedIn: 'root'
})
export class ViewCommentService {
  
  private baseURL="http://localhost:8008"
  constructor(private httpClient: HttpClient) { }
  getComments(pid:number):Observable<Comment[]>{
    let headers= new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem(`token`)}`);
   return this.httpClient.get<Comment[]>(`${this.baseURL}/comments/${pid}`, {headers});
  }

}
