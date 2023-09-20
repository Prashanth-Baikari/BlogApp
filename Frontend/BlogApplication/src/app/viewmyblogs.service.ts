import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class ViewmyblogsService  {
  private baseURL="http://localhost:8008";

  constructor(private httpClient: HttpClient) { }

  // getUserId():Observable<any>{
  //  let headers= new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem(`token`)}`)
  //   return this.httpClient.get(`${this.baseURL}/getuserid`,{headers})
  //   }
        
  getMyBlogs():Observable<Post[]>{
    let uid=localStorage.getItem(`id`);
    let headers= new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem(`token`)}`)
   return this.httpClient.get<Post[]>(`${this.baseURL}/myposts/${uid}`, {headers});  
    
  }
}