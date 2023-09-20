import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegisterService } from '../register.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(){
    this.register();
  }
  register() {
    this.registerService.registerUser(this.user).subscribe( data => {
      console.log(data);
      alert("Registration Successful");
      this.router.navigate(['/login']);
    },
    error => console.log(error)
    );
  }

}
