import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../Models/Movie';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  movieForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    director: new FormControl('', { nonNullable: true }),
    runtime: new FormControl('', { nonNullable: true }),
    releaseDate: new FormControl('', { nonNullable: true }),
    watched: new FormControl(false, { nonNullable: true }),
  });

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe((movie) => (this.movies = movie));
  }
}
