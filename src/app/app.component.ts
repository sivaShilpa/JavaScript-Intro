import { Component } from '@angular/core';
import {AngularService} from './angular.service';
import { movies } from './movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularService]
})
export class AppComponent {
  title = 'angular-helloworld';

  headers: Array<any> = [];
  movies: movies[] = [];

  constructor(private movieService: AngularService){
  }  

  getMovies(){
    this.headers = ["ID", "Title", "Director", "Release Date"];
    this.movies = this.movieService.getMovies();
  }

}
