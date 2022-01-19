import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentEditComponent } from './comment-list/comment-edit/comment-edit.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostListComponent,
    PostItemComponent,
    PostEditComponent,
    PostDetailComponent,
    DropdownDirective,
    CommentListComponent,
    CommentEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
