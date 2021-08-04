import React, { useEffect, useState } from 'react';

const styles = {
  m10: {
    margin: 10,
  },
  formCenter: {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left'
  },
  margin: {
    marginBottom: 5,
    marginTop: 5
  }
};

export default function MovieAdd({ movies, setMovies }) {
  const [formToggle, setFormToggle] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieSubtitle, setMovieSubtitle] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieImageUrl, setMovieImageUrl] = useState('');

  const handleMovieAdd = () => {
    setFormToggle(!formToggle);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movieTitle);
    if (movieTitle && movieSubtitle && movieYear && movieDescription && movieImageUrl) {
      const addNewMovie = [...movies, {
        id: Date.now(),
        title: movieTitle,
        subtitle: movieSubtitle,
        year: movieYear,
        description: movieDescription,
        imageUrl: movieImageUrl,
        rating: 0,
        usersRatedTotal: 0,
        usersRatedOne: 0,
        usersRatedTwo: 0,
        usersRatedThree: 0,
        usersRatedFour: 0,
        usersRatedFive: 0,
        userAdded: true
      }]
      setMovies(addNewMovie);
      setMovieTitle('');
      setMovieSubtitle('');
      setMovieDescription('');
      setMovieImageUrl('')
      setMovieYear('');
    } else {
      return 'Error';
    }
  }

  return(
    <div>
      <button onClick={handleMovieAdd} style={styles.formCenter}>Toggle Form</button>
      {
        formToggle ?
          <form style={styles.formCenter} onSubmit={handleSubmit}>
            <input style={styles.margin} type='text' name='title' placeholder='Title' value={movieTitle} onChange={e => setMovieTitle(e.target.value)}/><br/>
            <input style={styles.margin} type='text' name='subtitle' placeholder='Subtitle' value={movieSubtitle} onChange={e => setMovieSubtitle(e.target.value)}/><br/>
            <input style={styles.margin} type='text' name='year' placeholder='Year' value={movieYear} onChange={e => setMovieYear(e.target.value)}/><br/>
            <textarea style={styles.margin} type='text' name='description' placeholder='Description' rows="4" cols="50" value={movieDescription} onChange={e => setMovieDescription(e.target.value)}/><br/>
            <input style={styles.margin} type='text' name='imageurl' placeholder='Image URl' value={movieImageUrl} onChange={e => setMovieImageUrl(e.target.value)}/><br/>
            <button>Add Movie</button>
          </form>
          :
          <div></div>
      }
    </div>
  );
}