import { useCart } from "../../hooks/useCart";
import { useToast } from "../../hooks/useToast";
import CartItem from "./CartItem";
import "../../styles/CartPage.css";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const { showToast } = useToast();

  const handleRemove = (item) => {
    removeFromCart(item.id);
    showToast(`${item.name} removed from cart`, "success");
  };

  const handleUpdateQuantity = (item, newQuantity) => {
    if (newQuantity === 0) {
      handleRemove(item);
      return;
    }
    updateQuantity(item.id, newQuantity);
    showToast(`Updated ${item.name} quantity`, "success");
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}