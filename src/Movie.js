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
      <h3>{movieFormTitle}Title:</h3>
      <p>{movieFormDirector}Directed by:</p>
      <p>{movieFormYearReleased}Release year:</p>
    </div>
  );
}
