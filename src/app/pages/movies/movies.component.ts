import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink, MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getMovies();
  }
}
