import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
  [x: string]: any;
  title = 'xxxfrontend';
  
  directors: Director[] = [];
  genres: Genre[] = [];
  movies: Movie[] = [];
  reviews: Review[] = [];
  
  constructor(
    private directorService: directorservice,
    private genreService: GenreService,
    private movieService: MovieService,
    private reviewService: ReviewService,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      await this.getAllDirectors();
      await this.getAllGenres();
      await this.getAllMovies();
      await this.getAllReviews();
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  async getAllDirectors(): Promise<void> {
    try {
      this.directors = await this.directorService.getallDirectors().toPromise() || [];
      console.log(this.directors);
    } catch (error) {
      console.error('Error fetching directors:', error);
    }
  }

  async getAllGenres(): Promise<void> {
    try {
      this.genres = await this.genreService.getallGenres().toPromise()||[];
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  }

  async getAllMovies(): Promise<void> {
    try {
      this.movies = await this.movieService.getallMovies().toPromise()||[];
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  async getAllReviews(): Promise<void> {
    try {
      this.reviews = await this.reviewService.getallReviews().toPromise()||[];
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }
}