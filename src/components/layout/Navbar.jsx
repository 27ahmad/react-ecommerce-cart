import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import '../../styles/Navbar.css';

export default function Navbar() {
  const { getTotalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          Shopping Cart
        </Link>
        <Link to="/cart" className="cart-link">
          Cart
          <span className="cart-count">{getTotalItems()}</span>
        </Link>
      </div>
    </nav>
  );
}