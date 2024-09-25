import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Director } from './models/directors';
import { Movie } from './models/movies';
import { Review } from './models/review';
import { Genre } from './models/genre';
import { directorservice } from './service/directors.service';
import { MovieService } from './service/movie.service';
import { ReviewService } from './service/review.service';
import { GenreService } from './service/genre.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
  ],
  providers: [directorservice, MovieService, ReviewService, GenreService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'xxxfrontend';

  
  directors: Director[] = [];
  genres: Genre[] = [];
  movies: Movie[] = [];
  reviews: Review[] = [];
  
  constructor(
    private directorService: directorservice,
    private genreService: GenreService,
    private movieService: MovieService,
    private reviewService: ReviewService
  ){}

  ngoninit(): void {
    this.getAllDirectors();
    this.getAllGenres();
    this.getAllMovies();
    this.getAllReviews();
  }

  getAllDirectors(): void {
    this.directorService.getallDirectors().subscribe(directors => this.directors = directors);

  }
  getAllGenres(): void {
    this.genreService.getallGenres().subscribe(genres => this.genres = genres);
  }
  getAllMovies(): void {
    this.movieService.getallMovies().subscribe(movies => this.movies = movies);
  }
  getAllReviews(): void {
    this.reviewService.getallReviews().subscribe(reviews => this.reviews = reviews);
  }
}
