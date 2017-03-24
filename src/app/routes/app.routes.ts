import { Routes } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { UpcomingComponent } from '../upcoming/upcoming.component';
import { PopularSeriesComponent } from '../popular-series/popular-series.component';


export const appRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'upcoming', component:  UpcomingComponent },
  { path: 'popular/series', component: PopularSeriesComponent }
];
