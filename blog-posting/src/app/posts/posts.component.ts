import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(user => {
      console.log(user);
      this.postService.isAuthenticated.next(true);
      console.log(this.postService.isAuthenticated);
    })
    .catch(err => {
      console.log(err);
      this.postService.isAuthenticated.next(false);
      console.log(this.postService.isAuthenticated);
    });
  }

}
