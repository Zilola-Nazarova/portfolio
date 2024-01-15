import { v4 as uuidv4 } from 'uuid';
import { useRef, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from './useWindowDimensions';

import TabButton from './TabButton';
import HomeTab from './HomeTab';
import ProjectsTab from './ProjectsTab';
import AboutTab from './AboutTab';
import Contact from './Contact';
import styles from '../styles/Right.module.css';
import peach1 from '../assets/images/0_1.svg';
import peach2 from '../assets/images/0_2.svg';

const Right = ({ color, blink, doBlink }) => {
  const [tab, setTab] = useState('home');
  const container = useRef(null);
  const links = ['home', 'projects', 'about', 'contact'];
  const linksRef = useRef(links.map(() => createRef()));
  const { height } = useWindowDimensions();

  const handleClick = (index) => {
    const ref = linksRef.current[index];
    container.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const sections = [
    <HomeTab key={uuidv4()} sayHi={() => handleClick(3)} />,
    <ProjectsTab key={uuidv4()} />,
    <AboutTab key={uuidv4()} />,
    <Contact key={uuidv4()} />,
  ];

  const handleScroll = () => {
    const scrollY = container.current.scrollTop;
    links.forEach((link, i) => {
      let { offsetHeight, offsetTop } = linksRef.current[i].current;

      if (
        (scrollY > offsetTop - (height / 2)
        && scrollY <= offsetTop + offsetHeight)
      ) {
        setTab(link);
      }
    });
  };

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      className={`${styles.right} theme_${color}`}
      onClick={() => doBlink()}
      onKeyDown={() => doBlink()}
    >
      <header>
        <div className={`${styles.avatar} bg`}>
          <img src={blink ? peach2 : peach1} alt="avatar" />
        </div>
        <ul>
          {links.map((elem, i) => (
            <li
              key={uuidv4()}
              className={styles[`tab_${elem}`]}
            >
              <TabButton
                isActive={tab === elem}
                onClick={() => handleClick(i)}
              >
                {elem}
              </TabButton>
            </li>
          ))}
        </ul>
      </header>
      <div
        className="container"
        ref={container}
        onScroll={() => handleScroll()}
      >
        {sections.map((elem, i) => (
          <section
            className={styles[links[i]]}
            key={uuidv4()}
            ref={linksRef.current[i]}
          >
            {elem}
          </section>
        ))}
      </div>
    </div>
  );
};

Right.propTypes = {
  color: PropTypes.number.isRequired,
  blink: PropTypes.string.isRequired,
  doBlink: PropTypes.func.isRequired,
};

export default Right;
