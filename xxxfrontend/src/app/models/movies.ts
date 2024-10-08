import { Director } from "./directors";
import { Genre } from "./genre";
import { Review } from "./review";

export class Movie {
    id?: number;
    title: string="";
    durationMinutes : number=0;
    directorId:number=0;
    director?:Director;
    genreId:number=0;
    genre?:Genre;
    review:Review[]=[];
}