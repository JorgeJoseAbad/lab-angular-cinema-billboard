import { Component, OnInit } from '@angular/core';
 import { Cinema } from '../services/Cinema.service';

 @Component({
   selector: 'app-my-home-component',
   templateUrl: './my-home-component.component.html',
   styleUrls: ['./my-home-component.component.css'],
   providers: [Cinema]
 })
 export class MyHomeComponentComponent implements OnInit {
   moviesList : Array<Object> = this.cinemaList.getmovies();

   constructor(public cinemaList: Cinema) { }

   ngOnInit() {
     console.log(this.cinemaList.getmovies());
   }

 }
