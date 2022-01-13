import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostsComponent } from './posts/posts.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: '', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'posts', component: PostsComponent,
    children: [
      { path: 'new', component: PostEditComponent },
      { path: ':id', component: PostDetailComponent},
      { path: ':id/edit', component: PostEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
