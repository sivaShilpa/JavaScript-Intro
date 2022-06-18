import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit {
  headers: Array<any> = [];
  rows: Array<any> = [];

  constructor() {
    this.headers = ["ID", "Title", "Director", "Release Date"];

    this.rows = [
      {
        "ID" : "1",
        "Title" : "Lightyear",
        "Director" : "Angus MacLane",
        "Release Date" : "June 17, 2022"
      },
      {
        "ID" : "2",
        "Title" : "Jurassic World: Dominion",
        "Director" : "Colin Trevorrow",
        "Release Date" : "June 10, 2022"
      },
      {
        "ID" : "3",
        "Title" : "Top Gun: Maverick",
        "Director" : "Joseph Kosinski",
        "Release Date" : "May 27, 2022"
      },
      {
        "ID" : "4",
        "Title" : "The Bad Guys",
        "Director" : "Pierre Perifel",
        "Release Date" : "April 22, 2022"
      },
      {
        "ID" : "5",
        "Title" : "Doctor Strange in the Multiverse of Madness",
        "Director" : "Sam Raimi",
        "Release Date" : "May 6, 2022"
      }      
    ]
   }

  ngOnInit(): void {
  }
}
