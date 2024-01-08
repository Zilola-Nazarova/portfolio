import PropTypes from 'prop-types';
import styles from '../styles/Left.module.css';

const Bullet = ({ children, isActive, onClick }) => (
  <button
    type="button"
    onClick={() => onClick()}
    className={isActive ? styles.active : ''}
  >
    {children}
  </button>
);

Bullet.propTypes = {
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Bullet;
