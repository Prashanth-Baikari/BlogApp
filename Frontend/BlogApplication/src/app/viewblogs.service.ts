import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class ViewblogsService {

  private baseURL="http://localhost:8008";

  constructor(private httpClient: HttpClient) { }

  viewAllBlogs():Observable<Post[]>{
    
    let headers= new HttpHeaders()
      .set("Authorization",`Bearer ${localStorage.getItem(`token`)}`);
   return this.httpClient.get<Post[]>(`${this.baseURL}/posts`,{headers});
  }

}
