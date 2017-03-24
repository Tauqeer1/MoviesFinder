import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MoviesService {
  apiKey: string;

  constructor(private jsonp: Jsonp) {
    this.apiKey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
    console.log('Movies service is ready');
  }

  getPopular(){
    let search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getInTheaters(){
    let search = new URLSearchParams();
    search.set('primary_release_date.gt', '2015-10-20');
    search.set('primary_release_date.lte', '2015-12-20');
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getTopRatedMovies(){
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/movie/top_rated?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  searchMovies(searchStr: string) {
    let search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getMovie(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getGenres(){
    let search = new URLSearchParams();
    search.set('language', 'en-US');
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMoviesByGenre(id: string){
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/genre/'+ id +'/movies?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMoviesReviews(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/reviews?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieVideos(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/videos?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getSimilarMovies(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/similar?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieCredits(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getUpComingMovies() {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/movie/upcoming?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getPopularSeries() {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/tv/popular?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getTopRatedSeries() {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/tv/top_rated?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getSeriesDetails(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getSeriesVideos(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'/videos?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getPersonDetail(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/person/'+ id +'?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getPersonCast(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/person/'+ id +'/movie_credits?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }
}


