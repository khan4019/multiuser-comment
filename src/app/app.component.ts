import { Component } from '@angular/core';

export interface CommentData { comment: string; id: string; }
export interface Comment extends CommentData { id: string; }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
}
