import React, { Component } from 'react';

import { getCast } from '../../servises/movies-api';

import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    const cast = await getCast(movieId);

    this.setState({ cast });
  }

  render() {
    return (
      <>
        <ul className={styles.actorList}>
          {this.state.cast.map(role => (
            <li key={role.id} className={styles.actorCard}>
              <img src={role.profile_path && `https://image.tmdb.org/t/p/w500/${role.profile_path}`} alt="" className={styles.actorPhoto} />
              <p>{role.name}</p>
              <p>Character: {role.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
