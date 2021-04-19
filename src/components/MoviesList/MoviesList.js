import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ films, location }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: {
                from: location,
              },
            }}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(MoviesList);
