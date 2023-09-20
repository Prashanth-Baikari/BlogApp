import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateBlogService {
  private baseURL="http://localhost:8008";

  constructor(private httpClient: HttpClient ) { }
  uid:any
  // username:any = this.loginComponent.getLoggedInUser();

  // getUserId(){
  //    this.httpClient.get(`${this.baseURL}/getuserid`, this.username).subscribe(data =>{
  //     this.uid=data;
  //   });
  // }

  createblog(post: Post):Observable<object>{
    let uid=localStorage.getItem(`id`);
    let headers= new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem(`token`)}`);
   return this.httpClient.post(`${this.baseURL}/createpost/${uid}` ,post,{headers});
  }
}
