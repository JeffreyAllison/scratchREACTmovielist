import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('pink');
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [filterQuery, setFilterQuery] = useState('');

  return <div className="App"></div>;
}

export default App;
