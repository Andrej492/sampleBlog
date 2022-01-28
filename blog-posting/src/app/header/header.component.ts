import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../posts/post.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  authSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.authSubscription = this.postService.isAuthenticated
      .subscribe((authStatus: boolean) => {
        this.isAuthenticated = authStatus;
      });
  }

  ngOnDestroy(): void {
      this.authSubscription.unsubscribe();
  }

  async onLogout() {
    try {
      await Auth.signOut();
    } catch(err) {
      console.log('error signing out: ' + err);
    }

  }

  onSaveData() {

  }

  onFetchData() {

  }
}
