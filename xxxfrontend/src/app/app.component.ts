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
import { firstValueFrom } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    DialogComponent,
  ],
  providers: [
    directorservice, 
    MovieService, ReviewService, 
    GenreService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
    private router: Router,
    private dialog: MatDialog,
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

  //open dialog methode
  openDirectorDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { dialogType: 'director' };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createDirector({name: result, movies: [] });
      }
    });
  }

  openGenreDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { dialogType: 'genre' };
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createGenre({name: result });
      }
    });
  }

  openMovieDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { dialogType: 'movie' };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createMovie({ title: result.title, durationMinutes: result.durationMinutes });
      }
    });
  }

  openReviewDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { dialogType: 'review' };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createReview({rating: result.rating, comment: result.comment });
      }
    });
  }

  //get all methodes
  async getAllDirectors(): Promise<void> {
    try {
      this.directors = await this.directorService.getallDirectors().toPromise() || [];
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

  async createDirector(director: Director): Promise<void> {
    try {
      const newDirector = await firstValueFrom(this.directorService.createDirector(director));
      if (newDirector) {
        this.directors.push(newDirector);
      } else {
        console.error('Received undefined when trying to create a director.');
      }
    } catch (error) {
      console.error('Error creating director:', error);
    }
  }

  async createMovie(movie: Movie): Promise<void> {
    try {
      const newMovie = await firstValueFrom(this.movieService.createMovie(movie));
      if (newMovie) {
        this.movies.push(newMovie as Movie);
      } else {
        console.error('Received undefined when trying to create a movie.');
      }
    } catch (error) {
      console.error('Error creating movie:', error);
    }
  }
  
  async createGenre(genre: Genre): Promise<void> {
    try {
      const newGenre = await firstValueFrom(this.genreService.createGenre(genre));
      if (newGenre) {
        this.genres.push(newGenre);
      } else {
        console.error('Received undefined when trying to create a genre.');
      }
    } catch (error) {
      console.error('Error creating genre:', error);
    }
  }
  
  async createReview(review: Review): Promise<void> {
    try {
      const newReview = await firstValueFrom(this.reviewService.createReview(review));
      if (newReview) {
        this.reviews.push(newReview as Review);
      } else {
        console.error('Received undefined when trying to create a review.');
      }
    } catch (error) {
      console.error('Error creating review:', error);
    }
  }

  //delete methodes
  async deleteDirector(id:number):Promise<void>{
    try{
      await firstValueFrom(this.directorService.deleteDirector(id));
      this.directors = this.directors.filter(d=>d.id!==id);
    }catch(error){
      console.error('Error deleting director:',error);
    }
  }
  async deleteGenre(id:number):Promise<void>{
    try{
      await firstValueFrom(this.genreService.deleteGenre(id));
      this.genres = this.genres.filter(g=>g.id!==id);
    }catch(error){
      console.error('Error deleting genre:',error);
    }
  }
  async deleteMovie(id:number):Promise<void>{
    try{
      await firstValueFrom(this.movieService.deleteMovie(id));
      this.movies = this.movies.filter(m=>m.id!==id);
    }catch(error){
      console.error('Error deleting movie:',error);
    }
  }
  async deleteReview(id:number):Promise<void>{
    try{
      await firstValueFrom(this.reviewService.deleteReview(id));
      this.reviews = this.reviews.filter(r=>r.id!==id);
    }catch(error){
      console.error('Error deleting review:',error);
    }
  }
}
