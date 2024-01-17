import {
  useRef,
  useState,
  createRef,
  useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Bullet from './Bullet';
import Project from './Project';
import projectDetails from '../assets/projects';
import styles from '../styles/Projects.module.css';
// import left from '../styles/Left.module.css';

const Projects = ({ colorTheme }) => {
  const [tab, setTab] = useState(0);
  const [iterator, setIterator] = useState(1);
  const container = useRef(null);
  const elementsRef = useRef(projectDetails.map(() => createRef()));

  const handleClick = (index) => {
    const ref = elementsRef.current[index];
    container.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (tab === 2) {
        setIterator(-1);
      } else if (tab === 1) {
        setIterator(1);
      }
      handleClick(tab + iterator);
    }, 1000);
    return () => clearInterval(interval);
  }, [tab, iterator]);

  const bullets = [];
  for (let i = 0; i < 4; i += 1) {
    bullets.push(
      <Bullet
        key={uuidv4()}
        isActive={tab === i}
        onClick={() => handleClick(i)}
      />,
    );
  }

  const handleScroll = () => {
    const scrollY = container.current.scrollTop;
    bullets.forEach((bullet, i) => {
      const { offsetHeight, offsetTop } = elementsRef.current[i].current;
      if (
        scrollY > offsetTop - (offsetHeight / 2)
        && scrollY <= offsetTop + offsetHeight
      ) {
        setTab(i);
        colorTheme(i);
      }
    });
  };

  return (
    <>
      <nav>
        {bullets}
      </nav>
      <section
        ref={container}
        className="container"
        onScroll={() => handleScroll()}
      >
        {projectDetails.map((project, i) => (
          <article
            className={styles.project}
            ref={elementsRef.current[i]}
            key={uuidv4()}
          >
            <Project project={project} id={i} />
          </article>
        ))}
      </section>
    </>
  );
};

Projects.propTypes = {
  colorTheme: PropTypes.func,
};

Projects.defaultProps = {
  colorTheme: null,
};

export default Projects;
