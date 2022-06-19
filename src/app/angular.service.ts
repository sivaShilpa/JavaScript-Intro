import { Injectable } from '@angular/core';
import { movies } from './movies';


@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor() { }

  public getMovies(){
    
    let movies : movies[];

    movies = [
      {
        "ID" : 1,
        "Title" : "Lightyear",
        "Director" : "Angus MacLane",
        "ReleaseDate" : "June 17, 2022"
      },
      {
        "ID" : 2,
        "Title" : "Jurassic World: Dominion",
        "Director" : "Colin Trevorrow",
        "ReleaseDate" : "June 10, 2022"
      },
      {
        "ID" : 3,
        "Title" : "Top Gun: Maverick",
        "Director" : "Joseph Kosinski",
        "ReleaseDate" : "May 27, 2022"
      },
      {
        "ID" : 4,
        "Title" : "The Bad Guys",
        "Director" : "Pierre Perifel",
        "ReleaseDate" : "April 22, 2022"
      },
      {
        "ID" : 5,
        "Title" : "Doctor Strange in the Multiverse of Madness",
        "Director" : "Sam Raimi",
        "ReleaseDate" : "May 6, 2022"
      }      
    ]

    return movies;
  }
}
