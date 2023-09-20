import { Component, OnInit } from '@angular/core';
import { PostcommentService } from '../postcomment.service';
import { Comment } from '../Comment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postcomment',
  templateUrl: './postcomment.component.html',
  styleUrls: ['./postcomment.component.css']
})
export class PostcommentComponent implements OnInit{
pid !:number
constructor(private postCommentService: PostcommentService, private route:ActivatedRoute, private router: Router){}
 
ngOnInit(): void {
  this.pid=this.route.snapshot.params[`id`]
}
  commentDao: Comment = new Comment();

    onSubmit(){
    this.postComment();
  }
  postComment() {
    this.postCommentService.postComment(this.commentDao, this.pid).subscribe((data) =>{
      console.log(data);
      alert('comments added')
      this.router.navigate([`/viewallblogs`])

    },
    error => console.log(error)
    );
  }
}
