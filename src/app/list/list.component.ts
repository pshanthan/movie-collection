import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../Models/Movie';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ReactiveFormsModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  editingId: number | null = null;
  movies: Movie[] = [];
  movieForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    director: new FormControl('', { nonNullable: true }),
    runtime: new FormControl('', { nonNullable: true }),
    releaseDate: new FormControl('', { nonNullable: true }),
    watched: new FormControl(false, { nonNullable: true }),
  });
  searchControl = new FormControl('', { nonNullable: true });

  ngOnInit(): void {
    this.getMovies();
    this.searchControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(300))
      .subscribe((movies) => (this.movies = movies));
  }

  getMovies() {
    this.movieService.getMovies().subscribe((movie) => (this.movies = movie));
  }
  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.movies = this.movies.filter((m) => m.id !== id);
    });
  }
  startEdit(movie: Movie) {
    this.editingId = movie.id!;
    this.movieForm.patchValue({
      title: movie.title,
      director: movie.director,
      runtime: String(movie.runtime),
      watched: movie.watched,
      releaseDate: movie.releaseDate,
    });
  }
  onSubmit() {
    const raw = this.movieForm.getRawValue();
    const transformedMovie: Movie = {
      title: raw.title,
      director: raw.director,
      runtime: Number(raw.runtime),
      watched: raw.watched,
      releaseDate: raw.releaseDate,
    };
    if (this.editingId) {
      transformedMovie.id = this.editingId;
      this.movieService
        .updateMovie(transformedMovie)
        .subscribe((updatedMovie) => {
          this.movies = this.movies.map((m) =>
            m.id === this.editingId ? updatedMovie : m,
          );
          this.editingId = null;
        });
    } else {
      this.movieService.addMovie(transformedMovie).subscribe((addedmovie) => {
        this.movies = [...this.movies, addedmovie];
      });
    }
    this.movieForm.reset();
  }
}
