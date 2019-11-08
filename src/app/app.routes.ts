import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CommentGridComponent } from './comment-grid/comment-grid.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { 
    path: 'home',
    component: HomeComponent 
    },
  { 
    path: 'grid',     
    component: CommentGridComponent },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];