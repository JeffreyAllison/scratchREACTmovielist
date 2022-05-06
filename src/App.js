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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleFilterMovies(filterQuery), [filterQuery]);

  function handleDeleteMovie(movieFormTitle) {
    const movieIndex = allMovies.findIndex((movie) => movie.movieFormTitle === movieFormTitle);
    allMovies.splice(movieIndex, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {
    const searchMovies = allMovies.filter((movie) => movie.movieFormTitle.includes(search));
    search ? setFilteredMovies(searchMovies) : setAllMovies(allMovies);
  }

  return (
    <div className="App">
      <div className="current-movie quarter">
        <Movie
          movieFormTitle={movieFormTitle}
          movieFormYearReleased={movieFormYearReleased}
          movieFormDirector={movieFormDirector}
          movieFormColor={movieFormColor}
        />
      </div>
      <div className="movie-filter quarter">
        Filter Movies by Title
        <input onChange={(e) => setFilterQuery(e.target.value)} />
      </div>
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
      <MovieList
        movies={filterQuery ? filteredMovies : allMovies}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
