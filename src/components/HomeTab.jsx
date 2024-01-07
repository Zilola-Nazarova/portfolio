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
import peach from '../assets/peach.png';

const HomeTab = ({ sayHi }) => (
  <>
    <img src={peach} alt="avatar" height="50px" width="50px" />
    <h1>
      FULL-STACK DEVELOPER. ARCHITECT.
      <br />
      FREE-TIME MOUNTAINEER, PIANIST, ARTIST
    </h1>
    <p>
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
      className={styles.say_hi}
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
