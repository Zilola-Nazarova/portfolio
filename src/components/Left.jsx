import PropTypes from 'prop-types';
import Projects from './Projects';

import styles from '../styles/Left.module.css';

const Left = ({ colorTheme, doBlink }) => (
  <div // eslint-disable-line jsx-a11y/no-static-element-interactions
    className={styles.left}
    onClick={() => doBlink()}
    onKeyDown={() => doBlink()}
  >
    <Projects colorTheme={(i) => colorTheme(i)} />
  </div>
);

Left.propTypes = {
  colorTheme: PropTypes.func.isRequired,
  doBlink: PropTypes.func.isRequired,
};

export default Left;
