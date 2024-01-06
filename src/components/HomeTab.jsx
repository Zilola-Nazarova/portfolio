import React from 'react';
// import Popup from 'reactjs-popup';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { FaAngellist } from "react-icons/fa";

import styles from '../styles/HomeTab.module.css'

const HomeTab = () => (
  <>
    <h1>FULL-STACK DEVELOPER. ARCHITECT. <br/>FREE-TIME MOUNTAINEER, PIANIST, ARTIST</h1>
    <p>Full-stack web developer with a background in architecture and a love for UX/UI. Embrace and excel in the realm of mathematics and arts. Experienced in pair programming and remote work, quick to adapt. Fast learner and multitasker.</p>
    <ul className={styles.social}>
      <li><a href="https://github.com/Zilola-Nazarova"><FaGithub /></a></li>
      <li><a href="https://www.linkedin.com/in/zilola-nazarova/"><FaLinkedin /></a></li>
      <li><a href="https://twitter.com/NazarovaZi"><FaTwitter /></a></li>
      <li><a href="https://wellfound.com/u/zilola-nazarova"><SiWellfound /></a></li>
      <li><a href="https://medium.com/@zilolanazarova"><FaMediumM /></a></li>
      <li><a href="https://wellfound.com/u/zilola-nazarova"><FaAngellist /></a></li>
    </ul>
    <button
      className={styles.say_hi}
      onClick={() => handleClick(form)}
    >
      Say Hi
    </button>
  </> 
);

export default HomeTab;
