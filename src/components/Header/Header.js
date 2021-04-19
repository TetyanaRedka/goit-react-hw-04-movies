import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.link}>
          <NavLink exact to="/" className={styles.navLink} activeClassName={styles.navLinkActive}>
            HomePage
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/movies" className={styles.navLink} activeClassName={styles.navLinkActive}>
            MoviesPage
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
