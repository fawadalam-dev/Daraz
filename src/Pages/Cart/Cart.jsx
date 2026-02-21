import { Link } from "react-router";
import "./Cart.css";

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Start shopping and add items to your cart!</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₨{item.price.toLocaleString()}</p>
                </div>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  ₨{(item.price * item.quantity).toLocaleString()}
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₨{total.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span className="free">Free</span>
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <span>₨{total.toLocaleString()}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
