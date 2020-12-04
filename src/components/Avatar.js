import React from 'react';
import styles from './avatar.module.css';

const Avatar = (props) => {
  const { imageURL, username, story, style } = props;

  return (
    <div className={styles.avatarContainer} style={style}>
      <img
        className={styles.avatar}
        alt={`${username}'s avatar`}
        src={imageURL}
        style={{ ...(story ? {} : { border: 'none', width: '36px', height: '36px' }) }}
      />
      {!!story && <p>{username}</p>}
    </div>
  );
};

export default Avatar;
