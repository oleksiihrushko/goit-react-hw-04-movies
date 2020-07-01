import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moviesApi from '../../services/moviesApi';

// import PropTypes from 'prop-types'

export default class HomePage extends Component {
  state = {
    trending: [],
  };

  componentDidMount() {
    moviesApi
      .fetchTrendingMovies()
      .then(results => this.setState({ trending: results }));
  }

  render() {
    const { trending } = this.state;
    return (
      <div>
        <h2>Trending today</h2>
        {trending.length > 0 && (
          <ul>
            {trending.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movie/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
