import Projects from './Projects';
import styles from '../styles/ProjectsTab.module.css';

const ProjectsTab = ({colorTheme}) => {
  return (
    <>
      <Projects  colorTheme={(i) => colorTheme(i)}/>
    </>
  );
};

export default ProjectsTab;
