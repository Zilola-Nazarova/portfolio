import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
// import { objectOf } from 'prop-types';

import styles from '../styles/Project.module.css';

const Project = ({ project, id }) => {
  const mock_id = `mock_${id + 1}`;
  const liveDemo = project.live_demo;
  const image = project.featured_image;
  const {
    name,
    description,
    technologies,
    source,
  } = project;

  return (
    <>
      <div className={`${styles[mock_id]} ${styles.mockup}`}>
        Mockup
      </div>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tech}>
        {technologies.map((tech) => (
          <li key={uuidv4()}>{tech}</li>
        ))}
      </ul>
      <div className={`${styles.link}`}>
        <a href={source}>Source Code</a>
        <a href={liveDemo}>Live Demo</a>
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
