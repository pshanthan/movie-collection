import { Component, signal } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private movieService: MovieService) {}
  movies: signal<Movie[]> = [];
}
