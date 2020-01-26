import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  public movie : Movie  = new Movie();
  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  ngOnInit() {

    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
        this.apiService.get("movies/"+data.id).subscribe((data : Movie)=>{
          this.movie = data;
        });
      }
      else
      {
        this.movie = new Movie();
      }
    })
  }

  public onSubmit(){
    console.log("Adding a Movie: " + this.movie.name);
    if(this.movie.id){
      this.apiService.update("movies/"+this.movie.id,this.movie).subscribe((r)=>{
        console.log(r);
        alert("Movie updated !");
      })
    }
    else
    this.apiService.post("movies",this.movie).subscribe((r)=>{
      console.log(r);
      this.movie = new Movie();
      alert("Movie added !");
      
    });
  }

}
