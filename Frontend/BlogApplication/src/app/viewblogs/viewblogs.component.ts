import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { ViewblogsService } from '../viewblogs.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-viewblogs',
  templateUrl: './viewblogs.component.html',
  styleUrls: ['./viewblogs.component.css']
})
export class ViewblogsComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(private viewBlogService: ViewblogsService, private router: Router, private loginService: LoginService) {}
  ngOnInit(): void {
    this.viewPosts();
  }
  viewPosts() {
    if(this.loginService.isAuthenticated()){
   this.viewBlogService.viewAllBlogs().subscribe((data)=> {
    this.posts=data;
    })
  } 
}

  addcomment(id: number){
    this.router.navigate([`postcomment`, id]);
  }
  viewcomments(id: number){
    this.router.navigate([`viewcomments`, id])
  }
  logout(){
    localStorage.clear();
    this.router.navigate([`login`]);
    alert("User logged Out Successfully")
  }
}
