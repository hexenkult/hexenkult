import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="">
          <img src="/logo.png" alt="." />
        </a>
      </div>
      <div className={styles.lista}>
        <ul className={styles.navbar}>
          <li>Home</li>
          <li>Princing</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </div>

      <div>
        <p className={styles.login}>Login</p>
      </div>
    </div>
  );
}

export default Navbar