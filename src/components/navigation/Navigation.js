import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from '../../routes';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavigationLink + ' ' + styles.navLink}
        activeClassName={styles.NavigationLinkActive}
      >
        Home
      </NavLink>
      <br />
      <NavLink
        to={routes.moviesPage}
        className={styles.NavigationLink + ' ' + styles.navLink}
        activeClassName={styles.NavigationLinkActive}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
