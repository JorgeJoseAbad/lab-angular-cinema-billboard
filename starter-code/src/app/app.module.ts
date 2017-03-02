import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesServiceComponent } from './movies-service/movies-service.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesServiceComponent,
    MyHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
