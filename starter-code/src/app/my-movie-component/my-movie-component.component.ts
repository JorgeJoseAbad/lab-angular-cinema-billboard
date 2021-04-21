import { Component, OnInit } from '@angular/core';
import { Cinema } from '../services/Cinema.service';
import { ActivatedRoute } from '@angular/router';

 @Component({
   selector: 'app-my-movie-component',
   templateUrl: './my-movie-component.component.html',
   styleUrls: ['./my-movie-component.component.css'],
   providers:[Cinema]
 })
 export class MyMovieComponentComponent implements OnInit {
   idMovie : Number;
   movieObject: Object;
   constructor(public cinemaList: Cinema, private route: ActivatedRoute) { }

   ngOnInit() {
     console.log(this.cinemaList.getMovie(this.idMovie));
     this.route.params
       .subscribe((params) => this.idMovie = +params['id']);
       this.movieObject = this.cinemaList.getMovie(this.idMovie);

   }

   }
