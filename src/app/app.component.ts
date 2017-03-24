import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService]
})
export class AppComponent {

  genres: Array<Object>;

  constructor(private moviesService: MoviesService) {
    this.moviesService.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });
  }
}
