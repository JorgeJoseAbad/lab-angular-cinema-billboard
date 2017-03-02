import { Component, OnInit } from '@angular/core';
 import { Cinema } from '../services/Cinema.service';
 import { ActivatedRoute } from '@angular/router';

 @Component({
   selector: 'app-movies-service',
   templateUrl: './movies-service.component.html',
   styleUrls: ['./movies-service.component.css']
 })
 export class MyMovieComponentComponent implements OnInit {
   idMovie : Number;
   movieObject: Object;
   constructor(public cinemaList: Cinema,private route: ActivatedRoute) { }

   ngOnInit() {
     console.log(this.cinemaList.getMovie(this.idMovie));
     this.route.params
       .subscribe((params) => this.idMovie = +params['id']);
       this.movieObject = this.cinemaList.getMovie(this.idMovie);

   }

   }
