import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class CommentService {
  commentRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { 
    this.commentRef = this.db.list('/multiuser-comment');
  }

  public getComments(){
      return this.commentRef.snapshotChanges().pipe(map(comment => {
          return comment.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    }), 
    );

  }

  public postComment(newComment: Comment): void {
    newComment.timestamp = this.timestamp;
    this.db.list('multiuser-comment').push(newComment);
  }

  public markAsSpam(key: string, isSpam: boolean): void{
    this.commentRef.update(key, { markedSpam: isSpam });
  }

  public deleteComment(key: string): void{
    this.commentRef.remove(key);
  }

  get timestamp(): Object {
    return firebase.database.ServerValue.TIMESTAMP;
  }

}