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
          Title
          <input
            required
            value={movieFormTitle}
            onChange={(e) => setMovieFormTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released
          <input
            required
            value={movieFormYearReleased}
            onChange={(e) => setMovieFormYearReleased(e.target.value)}
          />
        </label>
        <label>
          Director
          <input
            required
            value={movieFormDirector}
            onChange={(e) => setMovieFormDirector(e.target.value)}
          />
        </label>
        <label>
          Poster Color
          <select
            required
            value={movieFormColor}
            onChange={(e) => setMovieFormColor(e.target.value)}
          >
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button>Add Movie to List</button>
      </form>
    </div>
  );
}
