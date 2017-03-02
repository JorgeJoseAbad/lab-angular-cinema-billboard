import { Injectable } from '@angular/core';
 import movies from '../movies';
 @Injectable()
 export class Cinema {
   moviesList : Array<Object> = [];
   movie:Object  = {};

    constructor() { }
    ngOnInit() {
   this.moviesList = movies;
   console.log(this.moviesList);
 }
    getmovies(){
     //  console.log(movies);
      return movies;
      // console.log(this.moviesList);
    }

    getMovie(id:any){
      return this.movie= this.moviesList.find((movie) => {
       return (movie['id'] === id);
       });
       //  console.log(this.movie);
    }
 }
