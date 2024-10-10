import { Component, Inject, Input, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Director } from '../models/directors';
import { Review } from '../models/review';

@Component({
  selector: 'app-director-dialog',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() dialogType: 'director' | 'genre' | 'movie' | 'review' = 'director';
  directorName: string = '';
  genreName: string = '';
  movieTitle: string = '';
  reviewComment: string = '';
  movieDuration: number = 0;
  reviewRating: number = 0;
  directorId: number[] = [];
  genreId: number[] = [];
  movieId?: number;
  reviews: Review[] = [];
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { this.dialogType = this.data.dialogType; 
    // If dialog type is movie, populate fields for editing
    if (this.dialogType === 'movie') {
      if (data.movie) {
        this.movieId = data.movie.id;
        this.movieTitle = data.movie.title;
        this.movieDuration = data.movie.durationMinutes;
        this.directorId = data.movie.directorIds || [];
        this.genreId = data.movie.genreIds || [];
      }
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {
    if (this.dialogType === 'director') {
      this.dialogRef.close(this.directorName);
    } else if (this.dialogType === 'genre') {
      this.dialogRef.close(this.genreName);
    } else if (this.dialogType === 'movie') {
      this.dialogRef.close({ 
        id: this.movieId, // Include the movie ID for updates
        title: this.movieTitle, 
        durationMinutes: this.movieDuration,
        directorId: this.directorId,
        genreId: this.genreId,
        reviews: this.reviews,
      });
    } else if (this.dialogType === 'review') {
      this.dialogRef.close({ rating: this.reviewRating, comment: this.reviewComment });
    }
    
  }
}