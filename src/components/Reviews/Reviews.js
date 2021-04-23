import React, { Component } from 'react';
import { getReviews } from '../../servises/movies-api';
// import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    try {
      const reviews = await getReviews(movieId);

      this.setState({ reviews });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We dont't have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default Reviews;
