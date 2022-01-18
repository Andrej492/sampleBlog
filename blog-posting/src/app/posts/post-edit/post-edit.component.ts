import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  postForm: FormGroup;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.postService.updatePost(this.id, this.postForm.value);
    } else {
      this.postService.addPost(this.postForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }

  onClear() {
    this.postForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
      //this.editPostSubscription.unsubscribe();
  }

  private initForm() {
    let postName = '';
    let postImagePath = '';
    let postDescription = '';
    //let postComments = new FormArray([]);

    if (this.editMode) {
      const post = this.postService.getPost(this.id);
      postName = post.name;
      postImagePath = post.imagePath;
      postDescription = post.description;
      // if (post['comments']) {
      //   for (let comment of post.comments) {
      //     postComments.push(
      //       new FormGroup({
      //         name: new FormControl(comment.name, Validators.required),
      //         amount: new FormControl(post.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/)
      //         ])
      //       })
      //     );
      //   }
      // }
    }

    this.postForm = new FormGroup({
      name: new FormControl(postName, Validators.required),
      imagePath: new FormControl(postImagePath, Validators.required),
      description: new FormControl(postDescription),
      //comments: postComments
    });
  }
}
