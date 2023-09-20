import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { CreateBlogService } from '../create-blog.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent  implements OnInit{
  
  post: Post = new Post();
  
  constructor(private createBlogService: CreateBlogService, private router: Router, private loginService: LoginService) {}
  ngOnInit(): void {}

  onSubmit(){
    this.createblog();
  }
  createblog() {
    if(this.loginService.isAuthenticated()) {
      this.createBlogService.createblog(this.post).subscribe((data:any)=>{
        console.log(data)
        alert('Posted')
        localStorage.setItem("pid",data.id);
        this.router.navigate([`/viewmyblogs`])
       },
       error => console.log(error)
       );
    }
    else {
      alert("Please Login to Continue")
      this.router.navigate([`/login`])
    }
   
  }
  
}
