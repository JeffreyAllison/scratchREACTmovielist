import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div
      onClick={() => handleDeleteMovie(title)}
      className="movie-poster"
      style={{ background: posterColor }}
    >
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}
