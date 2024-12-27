import { useState } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../cart/CartButton';
import LoadingSpinner from '../ui/LoadingSpinner';
import '../../styles/ItemCard.css';

export default function ItemCard({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="item-card">
      {!imageLoaded && (
        <div className="image-placeholder">
          <LoadingSpinner variant="dark"/>
        </div>
      )}
      <img 
        src={item.image} 
        alt={item.name}
        className={`item-image ${imageLoaded ? 'loaded' : ''}`}
        onLoad={() => setImageLoaded(true)}
      />
      <h3 className="item-title">{item.name}</h3>
      <p className="item-description">{item.description}</p>
      <p className="item-price">${item.price.toFixed(2)}</p>
      <CartButton item={item} />
    </div>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};