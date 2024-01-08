import React from 'react';
// import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMediumM,
  FaAngellist,
} from 'react-icons/fa';
import { SiWellfound } from 'react-icons/si';

import styles from '../styles/HomeTab.module.css';

const HomeTab = ({ sayHi }) => (
  <>
    <h1 className={styles.title}>
      FULL-STACK
      <br />
      SOFTWARE DEVELOPER. ARCHITECT.
    </h1>
    <h2 className={styles.subtitle}>
      FREE-TIME MOUNTAINEER, PIANIST, ARTIST
    </h2>
    <p className={styles.hero}>
      Full-stack web developer with a background in architecture and a love for UX/UI.
      Embrace and excel in the realm of mathematics and arts.
      Experienced in pair programming and remote work, quick to adapt.
      Fast learner and multitasker.
    </p>
    <ul className={styles.social}>
      <li><a href="https://github.com/Zilola-Nazarova" aria-label="My GitHub"><FaGithub /></a></li>
      <li><a href="https://www.linkedin.com/in/zilola-nazarova/" aria-label="My LinkedIn"><FaLinkedin /></a></li>
      <li><a href="https://twitter.com/NazarovaZi" aria-label="My Twitter"><FaTwitter /></a></li>
      <li><a href="https://wellfound.com/u/zilola-nazarova" aria-label="My Wellfound"><SiWellfound /></a></li>
      <li><a href="https://medium.com/@zilolanazarova" aria-label="My MediumM"><FaMediumM /></a></li>
      <li><a href="https://wellfound.com/u/zilola-nazarova" aria-label="My Angellist"><FaAngellist /></a></li>
    </ul>
    <button
      type="button"
      className={`${styles.say_hi} btn`}
      onClick={() => { sayHi(); }}
    >
      Say Hi
    </button>
  </>
);

HomeTab.propTypes = {
  sayHi: PropTypes.func.isRequired,
};

export default HomeTab;
