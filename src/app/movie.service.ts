import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Models/Movie';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/movies';
  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiUrl}`);
  }
  deleteMovie(movie: Movie): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${movie.id}`);
  }
  updateMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(`${this.apiUrl}/${movie.id}`, movie);
  }
  addMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(`${this.apiUrl}`, movie);
  }
}
