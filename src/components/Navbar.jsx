import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
        <ul className={styles.navbar}>
          <li>Home</li>
          <li>Princing</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
		<p>Login</p>
    </div>
  );
}

export default Navbar