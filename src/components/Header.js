import React from 'react';
import logo from '../images/logo.png';
import { ReactComponent as Camera } from '../images/iconography/Camera.svg';
import { ReactComponent as Message } from '../images/iconography/Message.svg';
import styles from './header.module.css';
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Camera />
      <img className={styles.logo} src={logo} alt="Hellenegram logo" />
      <Message />
    </header>
  );
};

export default Header;
