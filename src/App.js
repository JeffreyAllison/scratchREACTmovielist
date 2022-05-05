import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('magenta');
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [filterQuery, setFilterQuery] = useState('');

  function submitMovie(e) {
    e.preventDefault();

    const newMovie = {
      movieFormTitle: movieFormTitle,
      movieFormYearReleased: movieFormYearReleased,
      movieFormDirector: movieFormDirector,
      movieFormColor: movieFormColor,
    };

    setAllMovies([...allMovies, newMovie]);

    setMovieFormTitle('');
    setMovieFormYearReleased('');
    setMovieFormDirector('');
    setMovieFormColor('magenta');
  }

  return (
    <div className="App">
      <div className="current-movie quarter">
        <Movie
          movie={{
            movieFormTitle: movieFormTitle,
            movieFormYearReleased: movieFormYearReleased,
            movieFormDirector: movieFormDirector,
            movieFormColor: movieFormColor,
          }}
        />
      </div>
      <div className="movie-filter quarter">Filter movies</div>
      <MovieForm
        submitMovie={submitMovie}
        movieFormTitle={movieFormTitle}
        setMovieFormTitle={setMovieFormTitle}
        movieFormYearReleased={movieFormYearReleased}
        setMovieFormYearReleased={setMovieFormYearReleased}
        movieFormDirector={movieFormDirector}
        setMovieFormDirector={setMovieFormDirector}
        movieFormColor={movieFormColor}
        setMovieFormColor={setMovieFormColor}
      />
      <MovieList movies={allMovies} />
    </div>
  );
}

export default App;
