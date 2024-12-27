export const formatPrice = (price) => `$${price.toFixed(2)}`;

export const formatQuantity = (quantity) => Math.max(0, quantity);
import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
});