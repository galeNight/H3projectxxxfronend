import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getallMovies(){
    return this.http.get('https://localhost:7234/api/Movie');
  }
  getMovieById(id:number){
    return this.http.get('https://localhost:7234/api/Movie/'+id);

  }
  createMovie(movie:any){
    return this.http.post('https://localhost:7234/api/Movie',movie);
  }
  deleteMovie(id:number){
    return this.http.delete('https://localhost:7234/api/Movie/'+id);
  }
}
