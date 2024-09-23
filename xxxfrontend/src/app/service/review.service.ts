import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getallReviews(){
    return this.http.get('https://localhost:7234/api/Review');
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
