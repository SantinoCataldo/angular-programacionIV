import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  categories: string[] = ['Accion', 'Ciencia Ficcion', 'Comedia', 'Drama', 'Terror', 'Crimen', 'Aventura', 'Animacion'];

  movieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      
      title: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['']
    });
  }

  get title() { return this.movieForm.get('title'); }
  get category() { return this.movieForm.get('category'); }
  get imageUrl() { return this.movieForm.get('imageUrl'); }
  get description() { return this.movieForm.get('description'); }

  onSubmit(): void {
    if (this.movieForm.valid) {
      this.moviesService.addMovie(this.movieForm.value);
      this.router.navigate(['/movies']);
    }
  }
}
