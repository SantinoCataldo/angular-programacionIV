import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      category: 'Ciencia Ficcion',
      imageUrl: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
      description: 'Dom Cobb es un ladron capaz de meterse en los suenos para robar secretos del subconsciente y ahora le proponen implantar una idea para recuperar su vida'
    },
    {
      id: 2,
      title: 'Batman: El Caballero de la Noche',
      category: 'Accion',
      imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      description: 'Batman tiene que frenar al Joker que desata un caos tremendo por toda la ciudad de Gotham'
    },
    {
      id: 3,
      title: 'Interstellar',
      category: 'Ciencia Ficcion',
      imageUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      description: 'Un grupo de astronautas viaja a traves de un agujero de gusano buscando un planeta habitable para la humanidad'
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      category: 'Crimen',
      imageUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      description: 'Historias cruzadas de dos mafiosos, la esposa de un gangster y un boxeador con mucho humor negro'
    },
    {
      id: 5,
      title: 'El Padrino',
      category: 'Drama',
      imageUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      description: 'El lider de una familia de la mafia en Nueva York le pasa el control del negocio a su hijo menor'
    },
    {
      id: 6,
      title: 'Matrix',
      category: 'Ciencia Ficcion',
      imageUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      description: 'Un programador descubre que la realidad en la que vive es una simulacion y se une a la resistencia'
    },
    {
      id: 7,
      title: 'Gladiador',
      category: 'Accion',
      imageUrl: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      description: 'Un general romano traicionado termina como gladiador buscando venganza contra el emperador'
    },
    {
      id: 8,
      title: 'El Senor de los Anillos',
      category: 'Aventura',
      imageUrl: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      description: 'Frodo y Sam van hacia el Monte del Destino para destruir el Anillo mientras se da la batalla final por la Tierra Media'
    },
    {
      id: 9,
      title: 'El Club de la Pelea',
      category: 'Drama',
      imageUrl: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
      description: 'Un empleado aburrido de su rutina y un vendedor de jabon arman un club de peleas clandestino que se sale de control'
    },
    {
      id: 10,
      title: 'Forrest Gump',
      category: 'Drama',
      imageUrl: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
      description: 'Un tipo de buen corazon de Alabama termina formando parte de varios de los momentos mas importantes de la historia'
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  addMovie(movie: Movie): void {
    movie.id = this.movies.length + 1;
    this.movies.unshift(movie);
  }
}
