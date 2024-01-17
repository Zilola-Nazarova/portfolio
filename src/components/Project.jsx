import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../styles/Project.module.css';

const Project = ({ project, id }) => {
  const mockId = `mock_${id + 1}`;
  const mockup = `mockup_${id + 1}`;
  const liveDemo = project.live_demo;
  const image = project.featured_image;
  const altImage = project.alternative_images[1];
  const {
    name,
    description,
    technologies,
    source,
  } = project;

  return (
    <>
      <div className={`${styles[mockup]} ${styles.mockup}`}>
        <div className={styles[mockId]}>
          <img src={image} alt="Project preview" />
        </div>
        <div className={styles[mockId]}>
          <img src={altImage} alt="Project preview" />
        </div>
      </div>
      <h2 className={styles.title}>{name}</h2>
      <ul className={styles.tech}>
        {technologies.map((tech) => (
          <li key={uuidv4()}>{tech}</li>
        ))}
      </ul>
      <p className={styles.description}>{description}</p>
      <div className={`${styles.link}`}>
        <a href={source} target="_blank" rel="noreferrer">
          <FaGithub />
          Source Code
        </a>
        <a href={liveDemo} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt />
          Live Demo
        </a>
      </div>
    </>
  );
};

Project.propTypes = {
  id: PropTypes.number.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    featured_image: PropTypes.string.isRequired,
    alternative_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    source: PropTypes.string.isRequired,
    live_demo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
