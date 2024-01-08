import PropTypes from 'prop-types';
import styles from '../styles/Right.module.css';

const TabButton = ({ children, isActive, onClick }) => (
  <button
    className={isActive ? styles.active : ''}
    type="button"
    onClick={() => onClick()}
  >
    {children}
  </button>
);

TabButton.propTypes = {
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabButton;
