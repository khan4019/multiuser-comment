import { Component, OnInit, Input} from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit{
  @Input() postComment: Array<object> = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }


  markAsSpam(key, isSpam){
    this.commentService.markAsSpam(key, !isSpam);
  }

  deleteComment(key) {
    this.commentService.deleteComment(key);
  }


}
