import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import {Comment} from '../models/comment';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  commentForm: FormGroup;
  
  submitted: Boolean = false;
  public userId = 0;

  @Output() userCommented = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.commentForm.invalid) {
      return false;
    } else {
      const commentText = this.commentForm.controls['comment'].value;
      const newComment = new Comment(commentText);
      this.userCommented.emit(newComment);

      // reset text after submission
      this.commentForm.controls['comment'].setValue('');
      this.submitted = false;
    }
  }

}