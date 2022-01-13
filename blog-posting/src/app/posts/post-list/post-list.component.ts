import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postService: PostService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postsSubscription = this.postService.postsChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
      this.posts = this.postService.getPosts();
  }

  onNewPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
      this.postsSubscription.unsubscribe();
  }
}

