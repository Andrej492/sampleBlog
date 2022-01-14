import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @ViewChild('form', {static: false }) form: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedpost: Post;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.editedItemIndex = +params['id'];
          if(this.editedItemIndex === null) {
            this.editMode = true;
            console.log(this.editMode);
          }
        }
      )
  }

  onSubmit(form: NgForm) {
    const newPost = new Post(form.value.name, form.value.descritpion, form.value.imagePath);
    if(this.editMode) {
      // Update recipe
    } else {
      this.postService.addPost(newPost);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }
}
