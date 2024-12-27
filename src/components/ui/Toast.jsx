import { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Toast.css';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type}`} role="alert">
      <p>{message}</p>
      <button onClick={onClose} className="toast-close" aria-label="Close notification">
        ×
      </button>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
  onClose: PropTypes.func.isRequired
};