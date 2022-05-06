import React from 'react';

export default function MovieForm({
  movieFormTitle,
  setMovieFormTitle,
  movieFormYearReleased,
  setMovieFormYearReleased,
  movieFormDirector,
  setMovieFormDirector,
  movieFormColor,
  setMovieFormColor,
  submitMovie,
}) {
  return (
    <div className="movie-form-container quarter">
      <form onSubmit={submitMovie} className="movie-form">
        <label>
          Movie Title:
          <input
            required
            value={movieFormTitle}
            onChange={(e) => setMovieFormTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            required
            value={movieFormYearReleased}
            onChange={(e) => setMovieFormYearReleased(e.target.value)}
          />
        </label>
        <label>
          Director:
          <input
            required
            value={movieFormDirector}
            onChange={(e) => setMovieFormDirector(e.target.value)}
          />
        </label>
        <label>
          Poster Color:<br></br>
          <select
            required
            value={movieFormColor}
            onChange={(e) => setMovieFormColor(e.target.value)}
          >
            <option value="limegreen">Green</option>
            <option value="cyan">Blue</option>
            <option value="magenta">Pink</option>
            <option value="gold">Yellow</option>
            <option value="orangered">Orange</option>
          </select>
        </label>
        <br></br>
        <button>
          <i>Add Movie to List</i>
        </button>
      </form>
    </div>
  );
}
