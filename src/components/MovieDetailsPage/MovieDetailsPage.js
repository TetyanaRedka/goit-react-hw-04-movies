import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

import { getMovieDetails } from '../../servises/movies-api';

import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    homepage: '',
    id: '',
    title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    genres: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    const movie = await getMovieDetails(movieId);

    this.setState({ ...movie });
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    history.push(location?.state?.from || this.props.history.push('/'));
  };

  render() {
    const { url, path } = this.props.match;
    const { title, overview, poster_path, release_date, genres } = this.state;
    return (
      <>
        <div className={styles.mainCard}>
          <div>
            <button type="button" onClick={this.handleGoBack}>
              Go back
            </button>
            <img src={poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className={styles.mainImg} />
          </div>

          <div>
            {title && (
              <h1>
                {title} ({release_date.substr(0, 4)})
              </h1>
            )}
            <h2>Overview: </h2> <span>{overview}</span>
            <h2>Genres</h2>
            <ul className={styles.genresList}>
              {genres.length > 0 &&
                genres.map(genre => (
                  <li key={genre.id} className={styles.genres}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <div>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
