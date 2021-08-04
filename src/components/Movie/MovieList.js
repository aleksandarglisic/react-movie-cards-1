import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, handleDelete, movieRating) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} handleDelete={handleDelete} movieRating={movieRating}/>
    ))}
  </div>
);

const MovieList = ({ movies, handleDelete, movieRating }) => <div>{getMovies(movies, handleDelete, movieRating)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
