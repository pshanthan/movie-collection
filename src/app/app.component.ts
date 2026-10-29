import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movie-collection';
  constructor(public authService: AuthGuardService) {}
}
