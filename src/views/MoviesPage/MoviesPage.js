import React, { Component } from 'react';

import { searchMovies } from '../../servises/movies-api';

import MoviesList from '../../components/MoviesList/MoviesList';

import styles from '../../components/Header/Header.module.css';

class MoviesPage extends Component {
  state = {
    data: '',
    movies: [],
  };

  async componentDidMount() {
    if (this.props.location.search) {
      const queryString = require('query-string');
      const data = queryString.parse(this.props.location.search);
      this.fetchmovies(data.query);
    }
  }

  fetchmovies = async data => {
    const { match, history } = this.props;

    try {
      const movies = await searchMovies(data);

      this.setState({ movies });
    } catch (error) {
      console.log(error.message);
    }

    const nextLocation = {
      pathname: match.url,
      search: `?query=${data}`,
    };

    history.push(nextLocation);
  };

  handleChange = e => {
    this.setState({
      data: e.currentTarget.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { data } = this.state;
    this.fetchmovies(data);
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
