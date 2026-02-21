import { Link } from "react-router";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <div className="product-rating">
          <span className="stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
          <span className="rating-text">({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="price">₨{product.price.toLocaleString()}</span>
        </div>
        <button 
          className="add-to-cart-btn" 
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
