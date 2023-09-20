import { Component, OnInit } from '@angular/core';
import { ViewCommentService } from '../view-comment.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../Comment';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit{
  pid !:number
  comments !: Comment[];

  constructor(private viewCommentService: ViewCommentService, private route:ActivatedRoute){}
  ngOnInit(): void {
   this.pid=this.route.snapshot.params[`id`];
   this.viewComments();
  }

  viewComments(){
    this.viewCommentService.getComments(this.pid).subscribe((data) => {
      this.comments=data;
    })
  }

}
