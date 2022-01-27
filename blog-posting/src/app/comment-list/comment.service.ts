import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Comment } from "../shared/comment.model";

@Injectable({providedIn: 'root'})
export class CommentService {
  commentsChanged = new Subject<Comment[]>();

  private comments: Comment[] = [];

  getComments() {
    return this.comments.slice();
    // gets a copy of initial comments..
  }

  getCommentsByPostId(index: number) {
    // Get All comments from a chosen post dynamically from form!!
    // Tough??
  }

  addComment(newComment: Comment) {
    this.comments.push(newComment);
    // since this push pushes newComment to initial comments
    // we need to inform our app through commentsChanged that
    // new comment is added
    this.commentsChanged.next(this.comments.slice());
  }
  constructor() {}

  ngOnInit() : void {

  }
}
