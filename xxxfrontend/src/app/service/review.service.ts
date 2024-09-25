import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getallReviews(): Observable<Review[]> {
    return this.http.get<Review[]>('https://localhost:7234/api/Review');
  }
  
  getReviewById(id:number){
    return this.http.get('https://localhost:7234/api/Review/'+id);

  }
  createReview(review:any){
    return this.http.post('https://localhost:7234/api/Review',review);
  }
  deleteReview(id:number){
    return this.http.delete('https://localhost:7234/api/Review/'+id);
  }
}
