import { Component, OnInit } from '@angular/core';
import { ViewmyblogsService } from '../viewmyblogs.service';
import { Post } from '../Post';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewmyblogs',
  templateUrl: './viewmyblogs.component.html',
  styleUrls: ['./viewmyblogs.component.css']
})
export class ViewmyblogsComponent implements OnInit{

  myPosts: Post[] | undefined;
  uid=0;
  constructor(private viewMyBlogsService: ViewmyblogsService, private loginService: LoginService, private router:Router){}
  ngOnInit(): void {
   this.MyBlogs();
  }
  MyBlogs() {
    if(this.loginService.isAuthenticated()){
      this.viewMyBlogsService.getMyBlogs().subscribe((data)=>{
        this.myPosts=data
      })
    }
    else{
      alert("Please Login To Continue")
      this.router.navigate([`login`])
    }
    
  }

}
