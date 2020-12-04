import React from 'react';
import styles from './stories.module.css';
import { ReactComponent as Watch } from '../images/iconography/Watch.svg';
import Avatar from './Avatar';

import { STORIES } from '../data';

const Stories = () => {
  return (
    <div className={styles.storiesContainer}>
      <div className={styles.topBar}>
        <p>Legends</p>
        <p className={styles.watch}>
          <Watch /> Watch All
        </p>
      </div>
      <div className={styles.stories}>
        {STORIES.map((user, key) => (
          <Avatar key={key} imageURL={user.image} username={user.username} story />
        ))}
      </div>
    </div>
  );
};

export default Stories;
