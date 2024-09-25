import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Director } from '../models/directors';


@Injectable({
  providedIn: 'root'
})
export  class directorservice{
  constructor(private http:HttpClient) { }

  getallDirectors(): Observable<Director[]> {
    return this.http.get<Director[]>('https://localhost:7234/api/Director');
  }
  
    getdirector(id:number):Observable<Director>{
      return this.http.get<Director>('https://localhost:7234/api/Director/'+id);

    }
    createDirector(director:Director):Observable<Director>{
      return this.http.post<Director>('https://localhost:7234/api/Director',director);
    }
    deleteDirector(id:number):Observable<Director>{
      return this.http.delete<Director>('https://localhost:7234/api/Director/'+id);
    }
}