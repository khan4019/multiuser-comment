
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { CommentsComponent } from './comments/comments.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { CommentGridComponent } from './comment-grid/comment-grid.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {appRoutes} from './app.routes';
import { CommentBotService } from './services/comment-bot.service';
import { CommentService } from './services/comment.service';

// Danger. Should be moved to server for security
const firebaseConfig = {
  apiKey: "....",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
     ],
  declarations: [
    AppComponent,
    HomeComponent,
    CommentsComponent,
    CommentBoxComponent,
    CommentGridComponent,
    AboutComponent,
    PageNotFoundComponent,  ],
  bootstrap: [ AppComponent ],
  providers: [CommentBotService, CommentService]
})
export class AppModule { }
