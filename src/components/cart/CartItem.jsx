import PropTypes from "prop-types";
import { formatPrice } from "../../utils/format";
import "../../styles/CartPage.css";

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={item.image} alt={item.name} className="cart-item-image" />
      </div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{formatPrice(item.price)}</p>
        <div className="quantity-controls">
          <button
            onClick={() =>
              onUpdateQuantity(item, Math.max(0, item.quantity - 1))
            }
            className="quantity-btn"
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item, item.quantity + 1)}
            className="quantity-btn"
          >
            +
          </button>
        </div>
        <button onClick={() => onRemove(item)} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
