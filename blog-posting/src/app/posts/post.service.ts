import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {
  postsChanged = new Subject<Post[]>();
  startedEditing = new BehaviorSubject<number>(null);

  private posts: Post[] = [
    new Post(
      'First Post',
      'Post about tasty Schnitzel!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
    ),
    new Post(
      'Second Post',
      'Post about big burger!',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
    ),
    new Post(
      'Third Post',
      'Post about big burger!',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
    )
  ];

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
}
