import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
// import { objectOf } from 'prop-types';

import styles from '../styles/Projects.module.css';

const Project = ({ project }) => {
  const liveDemo = project.live_demo;
  const {
    name,
    description,
    technologies,
    source,
  } = project;

  return (
    <>
      <div className={styles.mockup}>
        Mockup
      </div>
      <h2 className={styles.white}>{name}</h2>
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={uuidv4()}>{tech}</li>
        ))}
      </ul>
      <div>
        <a href={source} className={`${styles.link} btn`}>Source Code</a>
        <a href={liveDemo} className={`${styles.link} btn`}>Live Demo</a>
      </div>
    </>
  );
};

Project.propTypes = {
  project: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    source: PropTypes.string.isRequired,
    live_demo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
