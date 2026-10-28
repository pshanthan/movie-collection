import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../Models/Movie';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuntimePipe } from '../runtime.pipe';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RuntimePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() movie!: Movie;
  @Output() edit = new EventEmitter<Movie>();
  @Output() delete = new EventEmitter<number>();
}
