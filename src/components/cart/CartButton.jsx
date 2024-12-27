import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function CartButton({ item }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await addToCart(item);
      showToast(`Added ${item.name} to cart!`, 'success');
    } catch (error) {
      showToast(`Failed to add item to cart: ${error.message}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleAddToCart} 
      disabled={isLoading}
      className="add-to-cart-button"
    >
      {isLoading ? <LoadingSpinner size="small" variant="light" /> : 'Add to Cart'}
    </button>
  );
}

CartButton.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};