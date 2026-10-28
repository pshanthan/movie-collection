import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../Models/Movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
}
