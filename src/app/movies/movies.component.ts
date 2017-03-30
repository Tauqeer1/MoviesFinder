import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {

  popularList:Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;

  constructor(private moviesService: MoviesService) {
    this.moviesService.getPopular().subscribe(res => {
      console.log('popular movies', res);
      this.popularList = res.results;
    });

    this.moviesService.getInTheaters().subscribe(res => {
      console.log('get in theaters', res);
      this.theatersList = res.results;
    });

    this.moviesService.getTopRatedMovies().subscribe(res => {
      console.log('top rated movies', res);
      this.topRatedList = res.results;
    });
  }


  searchMovies() {
    console.log('Working', this.searchStr);
    this.moviesService.searchMovies(this.searchStr).subscribe(res => {
      console.log('res', res);
      this.searchRes = res.results;
    })
  }

}
