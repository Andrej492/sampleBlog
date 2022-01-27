import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.comments = this.commentService.getComments();
    this.commentService.commentsChanged.subscribe(
      (newComments: Comment[]) => {
        this.comments = newComments;
      }
    );
  }

}
