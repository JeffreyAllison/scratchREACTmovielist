import React from 'react';

export default function Movie({ posterColor, title, year, deleteMovieById }) {
  return (
    <div
      onClick={() => deleteMovieById(title)}
      className="movie-poster"
      style={{ background: posterColor }}
    >
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}
