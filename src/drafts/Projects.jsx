import {useRef} from 'react';
import styles from '../styles/Projects.module.css'

const Projects = () => {
  const project_1 = useRef(null);
  const project_2 = useRef(null);
  const project_3 = useRef(null);
  const project_4 = useRef(null);
  const container = useRef(null);

  return(
    <section ref={container} className={styles.projects}>
      <article ref={project_1}>PROJECT 1</article>
      <article ref={project_2}>PROJECT 2</article>
      <article ref={project_3}>PROJECT 3</article>
      <article ref={project_4}>PROJECT 4</article>
    </section>
  )
}
  
export default Projects;
