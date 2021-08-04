import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieAdd from './MovieAdd';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const handleDelete = (id, userAdded) => {
    if (userAdded) {
      setMovies(movies.filter(prev => prev.id !== id));
    }
  }

  const movieRating = (rating, id) => {
    let addRating = movies.map(movie => {
      if (movie.id == id && movie.userAdded) {
        switch (rating) {
          case 1:
            movie.usersRatedOne = movie.usersRatedOne + 1;
            break;
          case 2:
            movie.usersRatedTwo = movie.usersRatedTwo + 1;
            break;
          case 3:
            movie.usersRatedThree = movie.usersRatedThree + 1;
            break;
          case 4:
            movie.usersRatedFour = movie.usersRatedFour + 1;
            break;
          case 5:
            movie.usersRatedFive = movie.usersRatedFive + 1;
            break;
        }
        let totalUserRated = movie.usersRatedOne + movie.usersRatedTwo + movie.usersRatedThree + movie.usersRatedFour + movie.usersRatedFive
        let newAverage = (5 * movie.usersRatedFive + 4 * movie.usersRatedFour + 3 * movie.usersRatedThree + 2 * movie.usersRatedTwo + 1 * movie.usersRatedOne) / (movie.usersRatedFive + movie.usersRatedFour + movie.usersRatedThree + movie.usersRatedTwo + movie.usersRatedOne);
        movie.usersRatedTotal = totalUserRated;
        movie.rating = newAverage.toFixed(1);
      }
      return movie;
    })
    setMovies(addRating);
  }

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <MovieAdd setMovies={setMovies} movies={movies}/>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} handleDelete={handleDelete} movieRating={movieRating}/>
        </div>
      </div>
    </div>
  );
}

export default Movies;
