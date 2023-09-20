import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginData } from './loginData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL="http://localhost:8008";

  constructor(private httpClient: HttpClient) { }

  loginUser(logindata: loginData):Observable<any>{
    return this.httpClient.post(`${this.baseURL}/login`,logindata);
  }

  isAuthenticated(){
    if(localStorage.getItem(`token`)!=null)
      return true;
    else
     return false;
  }

}
