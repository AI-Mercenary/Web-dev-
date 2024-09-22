import Link from 'next/link';  // Import Link for navigation
import React from 'react';  // Import React
import styles from './Career.module.css';  // Import your CSS module

const Career = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Careers</h1>
      <p className={styles.subtitle}>Explore career opportunities with us!</p>
      <Link href="/apply">
        <button className={styles.joinButton}>Join Us</button>
      </Link>
    </div>
  );
};

export default Career;  // Export the component as default
