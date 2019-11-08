import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, of, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

import { CommentService } from './comment.service';
import {Comment} from '../models/comment';

type Quote = { quote: string, author: string };

@Injectable()
export class CommentBotService {

  private commentAtInterval$: Observable<number> = timer(30000, 30000);

  constructor(private commentService: CommentService, private http: HttpClient) { }

    private killTrigger: Subject<void> = new Subject();
    

    public activateCommentBot(){
      this.commentAtInterval$.subscribe(interval =>{
        this.getQuote().subscribe(data =>{
          const quote = data.quotes[0].quote;
          const newComment = new Comment(quote);
          this.commentService.postComment(newComment)
        });
        
      });
    }

    private getQuote(){
      const quoteUrl = '/services/quotes.json'
      return this.http.get('/assets/data.json');
      // return this.http.get(quoteUrl);
    }

    public deactivateCommentBot(){
      this.commentAtInterval$.unsubscribe();
    }

}