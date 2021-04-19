import React, { Component } from 'react';
import MoviesList from '../MoviesList/MoviesList';

import { searchMovies } from '../../servises/movies-api';
import styles from '../Header/Header.module.css';

class MoviesPage extends Component {
  state = {
    data: '',
    movies: [],
  };

  handleChange = e => {
    this.setState({
      data: e.currentTarget.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { match, history } = this.props;
    const { data } = this.state;

    const movies = await searchMovies(data);

    this.setState({ movies });
    const nextLocation = {
      pathname: match.url,
      search: `?query=${data}`,
    };

    history.push(nextLocation);
  };

  render() {
    const { data, movies } = this.state;
    return (
      <main className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={data} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>

        {movies.length > 0 && <MoviesList films={movies} />}
      </main>
    );
  }
}

export default MoviesPage;
