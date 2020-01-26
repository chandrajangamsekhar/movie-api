import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    public columns = ['id','name'];
    public rows : Array<Movie>; 
    
  constructor(public apiService: ApiService , public router : Router) {

  }

  public update(id:string){
    console.log("update : " + id );
    this.router.navigateByUrl('/movies/add/' + id);
  }
  public show(id:string){
    console.log("update : " + id );
    this.router.navigateByUrl('/movies/show/' + id);
  }
  ngOnInit() {
    this.apiService.get("movies").subscribe((data : Movie[])=>{
      console.log(data);
      this.rows = data;
    });
  }

}
