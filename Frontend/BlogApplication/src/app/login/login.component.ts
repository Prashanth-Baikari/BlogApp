import { Component, OnInit } from '@angular/core';
import { loginData } from '../loginData';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logindata: loginData = new loginData();
  
  constructor(private loginService: LoginService , private router: Router) {}
 
  ngOnInit(): void {} 

  onSubmit(){
    console.log(this.logindata);
    this.login();
  }
  login() {
   this.loginService.loginUser(this.logindata).subscribe((data: any) => {
    console.log(data);
    localStorage.setItem("token", data.authenticationToken);
    localStorage.setItem("username",data.username);
    localStorage.setItem("id",data.id);
    alert("Login Successful");
    this.router.navigate(['/posts']);
   },
   error=> console.log(error)
    );
  }
}
