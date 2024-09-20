import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { Director } from '../models/directors';


@Injectable({
  providedIn: 'root'
})
export  class directorservice{

    getallDirectors():Observable<Director>{
        return this.get<Director>('https://localhost:7234/api/Director');
}