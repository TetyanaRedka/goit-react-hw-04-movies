import React, { Component } from 'react';

import { getTrendMovies } from '../../servises/movies-api';
import MoviesList from '../../components/MoviesList/MoviesList';

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const result = await getTrendMovies();

    this.setState({
      films: result,
    });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {films.length > 0 && <MoviesList films={films} />}
      </>
    );
  }
}

export default HomePage;
