import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CommentService } from '../services/comment.service';
import { CommentBotService } from '../services/comment-bot.service';

import {Comment} from '../models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: Observable<Comment[]>;
  commentCount: number;

  constructor(private commentService: CommentService,
              private commentBotService: CommentBotService
              ) {
  }

  ngOnInit() {
    this.commentCount = 0;
    this.loadComments();
    this.commentBotService.activateCommentBot();
  }

  private loadComments(){
    this.commentService.getComments().subscribe(comments=>{
      // convert timestamp to datetime and then sort by date
      comments.forEach( comment => comment.commentTime = new Date(comment.timestamp));
      const sortedComments = comments.sort((first, second) => second.commentTime - first.commentTime );

      // bind for the ui
      this.comments = sortedComments;
      this.commentCount = this.comments.length;
    })
  }

  postAComment(newComment) {
    this.commentService.postComment(newComment);
  }

}
