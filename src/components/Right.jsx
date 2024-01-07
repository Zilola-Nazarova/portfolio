import { v4 as uuidv4 } from 'uuid';
import { useRef, useState, createRef } from 'react';
import TabButton from './TabButton';
import HomeTab from './HomeTab';
import AboutTab from './AboutTab';
import Contact from './Contact';
import styles from '../styles/Right.module.css';
import peach from '../assets/peach.png';

const Right = () => {
  const [tab, setTab] = useState('home');
  const container = useRef(null);
  const links = ['home', 'about', 'contact'];
  const linksRef = useRef(links.map(() => createRef()));

  const handleClick = (index) => {
    const ref = linksRef.current[index];
    container.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
    setTab(links[index]);
  };

  const sections = [
    <HomeTab key={uuidv4()} sayHi={() => handleClick(2)} />,
    <AboutTab key={uuidv4()} />,
    <Contact key={uuidv4()} />,
  ];

  return (
    <div className={styles.right}>
      <header>
        <img className={styles.avatar} src={peach} alt="avatar"/>
        <ul>
          {links.map((elem, i) => (
            <li>
              <TabButton
                key={uuidv4()}
                isActive={tab === elem}
                onClick={() => handleClick(i)}
              >
                {elem}
              </TabButton>
            </li>
          ))}
        </ul>
      </header>
      <div className="container" ref={container}>
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

export default Right;
