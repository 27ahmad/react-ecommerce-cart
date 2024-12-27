import { createContext } from 'react';

export const ToastContext = createContext({
  showToast: () => {},
  hideToast: () => {}
});