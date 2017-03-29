import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { appRoutes } from './routes/app.routes';
import { MoviesComponent } from './movies/movies.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieCardComponent,
    UpcomingComponent,
    PopularSeriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2BootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
