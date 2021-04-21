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
   private idMovie : Number;
   private movieObject: Object;

   constructor(public cinemaList: Cinema, private route: ActivatedRoute) { }

   ngOnInit() {
     console.log(this.cinemaList.getMovie(this.idMovie)); //aqui no funciona porque
                                             //aun no tenemos this.idMovie
     this.route.params
       .subscribe(
         (params) => this.idMovie = +params['id'],
         (err)=>console.log(err),
         () => console.log("buscados params", this.idMovie) //esto debería funcionar ¿?
       );

     this.movieObject = this.cinemaList.getMovie(this.idMovie);

     console.log(this.movieObject);
     console.log(this.cinemaList.getMovie(this.idMovie)); //aqui si funciona porque
                                        //hemos recuperado el idMovie de los parametros
   }

}
