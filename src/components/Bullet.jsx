import PropTypes from 'prop-types';
import { TbPointFilled } from 'react-icons/tb';

import styles from '../styles/Left.module.css';

const Bullet = ({ isActive, onClick }) => (
  <button
    aria-label="Navigate to another project"
    type="button"
    onClick={() => onClick()}
    className={isActive ? styles.active : ''}
  >
    <TbPointFilled className={styles.bullet} size="30px" />
  </button>
);

Bullet.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Bullet;
