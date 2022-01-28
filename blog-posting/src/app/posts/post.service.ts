import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CommentService } from "../comment-list/comment.service";
import { Comment } from "../shared/comment.model";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {
  postsChanged = new Subject<Post[]>();
  //startedEditing = new BehaviorSubject<number>(null);
  isAuthenticated = new BehaviorSubject<boolean>(false);

  private posts: Post[] = [
    new Post(
      'First Post',
      'Post about tasty Schnitzel!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Comment('First Comment'),
        new Comment('Second comment')
      ]
    ),
    new Post(
      'Second Post',
      'Post about big burger!',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Comment('Third Comment'),
        new Comment('Fourth comment')
      ]
    ),
    new Post(
      'Third Post',
      'Post about big burger!',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Comment('Fifth Comment'),
        new Comment('Sixth comment')
      ]
    )
  ];

  constructor(private commentService: CommentService) {}

  getPosts() {
    return this.posts.slice();
  }

  getPost(index: number) {
    return this.posts[index];
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.postsChanged.next(this.posts.slice());
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.postsChanged.next(this.posts.slice());
  }

  updatePost(index: number, post: Post) {
    this.posts[index] = post;
    this.postsChanged.next(this.posts.slice());
  }

  addComment(comment: Comment) {
    this.commentService.addComment(comment);
  }
}
