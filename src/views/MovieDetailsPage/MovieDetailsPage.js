import React, { Component, Suspense, lazy } from 'react';
import { Route, Link } from 'react-router-dom';
import { getMovieDetails } from '../../servises/movies-api';

import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../../components/Cast/Cast.js'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews.js'));

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

    try {
      const movie = await getMovieDetails(movieId);

      this.setState({ ...movie });
    } catch (error) {
      console.log(error.message);
    }
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    history.push(location?.state?.from || history.push('/'));
  };

  render() {
    const { from } = this.props.location.state;
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
              <Link
                to={{
                  pathname: `${url}/cast`,
                  state: {
                    from,
                  },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${url}/reviews`,
                  state: {
                    from,
                  },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Suspense fallback={<h1>...</h1>}>
            <Route path={`${path}/cast`} component={Cast} />
            <Route path={`${path}/reviews`} component={Reviews} />
          </Suspense>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
