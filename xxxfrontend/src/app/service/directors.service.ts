import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { Director } from '../models/directors';


@Injectable({
  providedIn: 'root'
})
export  class directorservice{
  constructor(private http:HttpClient) { }

    getallDirectors():Observable<Director>{
        return this.http.get<Director>('https://localhost:7234/api/Director');
    }
    getdirector(id:number):Observable<Director>{
      const director2 = this.http.get<Director>('https://localhost:7234/api/Director/'+id);
      console.log(director2);
      return director2;
    }
}