'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link
            className={styles.a}
            href={{
              pathname: '/',
            }}
          >
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.a}
            href={{
              pathname: '/about',
            }}
          >
            about
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.a}
            href={{
              pathname: '/services',
            }}
          >
            services
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.a}
            href={{
              pathname: '/contact',
            }}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
