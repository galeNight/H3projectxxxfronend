import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }

  getallGenres():Observable<Genre>{
    return this.http.get<Genre>('https://localhost:7234/api/Genre');
  }
  getGenreById(id:number):Observable<Genre>{
    return this.http.get<Genre>('https://localhost:7234/api/Genre/'+id);

  }
  createGenre(genre:Genre):Observable<Genre>{
    return this.http.post<Genre>('https://localhost:7234/api/Genre',genre);
  }
  deleteGenre(id:number):Observable<Genre>{
    return this.http.delete<Genre>('https://localhost:7234/api/Genre/'+id);
  }
}
