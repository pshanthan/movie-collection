import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../Models/Movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() {
    this.movieService.getMovies().subscribe((movie) => (this.movies = movie));
  }
}
