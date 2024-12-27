import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './context/cart/CartContext';
import ToastProvider from './context/toast/ToastContext';
import PageLayout from './components/layout/PageLayout';
import MainPage from './components/MainPage';
import CartPage from './components/cart/CartPage';
import './App.css';

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <PageLayout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </PageLayout>
        </Router>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;