import React from 'react';

export default function Movie({
  movieFormTitle,
  movieFormYearReleased,
  movieFormDirector,
  movieFormColor,
  handleDeleteMovie,
}) {
  return (
    <div
      className="movie-poster"
      onClick={() => handleDeleteMovie && handleDeleteMovie(movieFormTitle)}
      style={{ background: movieFormColor }}
    >
      <h3>Title: {movieFormTitle}</h3>
      <p>Directed by: {movieFormDirector}</p>
      <p>Release year: {movieFormYearReleased}</p>
    </div>
  );
}
