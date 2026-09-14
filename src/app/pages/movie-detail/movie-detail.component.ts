import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    const id = Number(this.route.snapshot.params['id']);
    this.movie = this.moviesService.getMovieById(id);
  }
}
