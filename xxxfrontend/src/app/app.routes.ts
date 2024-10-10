import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule, Route } from '@angular/router';
import { DirectorsComponent } from './components/directors/directors.component';
import { GenreComponent } from './components/genre/genre.component';
import { MovieComponent } from './components/movie/movie.component';
import { ReviewComponent } from './components/review/review.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'directors', component: DirectorsComponent},
    {path: 'genre', component: GenreComponent},
    {path: 'movie', component: MovieComponent},
    {path: 'review', component: ReviewComponent},
    {path: 'app',component: AppComponent},
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
