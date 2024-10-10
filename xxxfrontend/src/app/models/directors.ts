import { Movie } from "./movies";

export class Director {
  id?: number;
  name: string="";
  movies?: Movie[]=[];
}