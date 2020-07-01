import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../navigation/Navigation.module.css';
import PropTypes from 'prop-types';

export default class AdditionalInfo extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <p>Additional information</p>
        <NavLink
          exact
          to={{
            pathname: `/movie/${id}/cast`,
            state: { from: this.props.newLocation },
          }}
          className={styles.NavigationLink + ' ' + styles.AddInfoLink}
          activeClassName={styles.NavigationLinkActive}
        >
          Cast
        </NavLink>
        <br />
        <NavLink
          to={{
            pathname: `/movie/${id}/reviews`,
            state: { from: this.props.newLocation },
          }}
          className={styles.NavigationLink + ' ' + styles.AddInfoLink}
          activeClassName={styles.NavigationLinkActive}
        >
          Reviews
        </NavLink>
      </div>
    );
  }
}

AdditionalInfo.propTypes = {
  id: PropTypes.number.isRequired,
};
