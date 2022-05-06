import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, handleDeleteMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie, i) => (
        <Movie
          key={`${movie.movieFormYearReleased}-${movie.movieFormTitle}-${i}`}
          movieFormTitle={movie.movieFormTitle}
          movieFormYearReleased={movie.movieFormYearReleased}
          movieFormDirector={movie.movieFormDirector}
          movieFormColor={movie.movieFormColor}
          handleDeleteMovie={handleDeleteMovie}
        />
      ))}
    </div>
  );
}
