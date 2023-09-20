import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseURL="http://localhost:8008";


  constructor(private httpClient: HttpClient) { }

  registerUser(user: User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/signup`, user);
  }
}
