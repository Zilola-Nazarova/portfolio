// import Scrollchor from 'react-scrollchor';
// import Projects from './Projects';
import { v4 as uuidv4 } from 'uuid';
// import React from 'react';
import { useRef, useState, createRef } from 'react';
import { TbPointFilled } from 'react-icons/tb';
// import { NavLink, useNavigate } from 'react-router-dom';
import Bullet from './Bullet';
import projectDetails from '../assets/projects';
import Project from './Project.jsx';
import styles from '../styles/Left.module.css';

const Left = () => {
  // const pr_1 = useRef(null);
  const [tab, setTab] = useState('pr_0');
  const container = useRef(null);
  const elementsRef = useRef(projectDetails.map(() => createRef()));

  const handleClick = (index) => {
    const ref = elementsRef.current[index];
    setTab(`pr_${index}`);
    container.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const bullets = [];
  for (let i = 0; i < 4; i += 1) {
    bullets.push(
      <Bullet
        key={uuidv4()}
        isActive={tab === `pr_${i}`}
        onClick={() => handleClick(i)}
      >
        <TbPointFilled className={styles.bullet} size="30px" />
      </Bullet>,
    );
  }

  return (
    <div className={styles.left}>
      <nav>
        {bullets}
      </nav>
      <section ref={container} className="container">
        {projectDetails.map((project, i) => (
          <article
            className={styles.project}
            ref={elementsRef.current[i]}
            key={uuidv4()}
          >
            <Project project={project} />
          </article>
        ))}
      </section>
    </div>
  );
};

export default Left;
