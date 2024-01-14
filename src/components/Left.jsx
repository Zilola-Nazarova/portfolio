import Projects from './Projects';
import styles from '../styles/Left.module.css';

const Left = ({ colorTheme, doBlink }) => {
  return (
    <div
      className={styles.left}
      onClick={() => doBlink()}
    >
      <Projects colorTheme={(i) => colorTheme(i)} />
    </div>
  );
};

export default Left;
