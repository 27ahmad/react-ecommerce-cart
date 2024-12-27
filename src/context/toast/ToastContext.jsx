import { useState } from 'react';
import PropTypes from 'prop-types';
import Toast from '../../components/ui/Toast';
import { ToastContext } from './toast-context';

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null); 
    }, 3000);
  };

  const hideToast = () => {
    setToast(null);
  };

  const value = {
    showToast,
    hideToast
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired
};