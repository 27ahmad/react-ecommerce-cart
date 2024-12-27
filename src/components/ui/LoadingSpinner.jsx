import PropTypes from 'prop-types';
import '../../styles/LoadingSpinner.css';

export default function LoadingSpinner({ 
  size = 'default',
  variant = 'light',
  className = '' 
}) {
  const sizeClass = size !== 'default' ? `spinner-${size}` : '';
  const variantClass = `spinner-${variant}`;
  
  return (
    <div 
      className={`spinner ${sizeClass} ${variantClass} ${className}`}
      role="status" 
      aria-label="Loading"
    />
  );
}

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  variant: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string
};