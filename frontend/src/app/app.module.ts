import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieShowComponent } from './movie-show/movie-show.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieAddComponent,
    MovieShowComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'movies',
        component: MovieListComponent
      },
      {
        path: 'movies/add',
        component: MovieAddComponent
      },
      {
        path: 'movies/add/:id',
        component: MovieAddComponent
      },
      {
        path: 'movies/show/:id',
        component: MovieShowComponent
      },
      
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
