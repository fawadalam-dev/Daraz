import { useParams, Link } from "react-router";
import { products } from "../../data/products";
import "./Product.css";

function Product({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-container">
        <h1>Product Not Found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail-container">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>

          <div className="product-detail-rating">
            <span className="stars">
              {"⭐".repeat(Math.floor(product.rating))}
            </span>
            <span className="rating-value">{product.rating}</span>
            <span className="reviews">({product.reviews} reviews)</span>
          </div>

          <div className="product-detail-price">
            <span className="price">₨{product.price.toLocaleString()}</span>
            <span className="category-badge">{product.category}</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <button
              className="add-to-cart-btn"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
            <button className="buy-now-btn">Buy Now</button>
          </div>

          <div className="product-details-section">
            <h3>Product Details</h3>
            <ul>
              <li>High quality and durable product</li>
              <li>Easy to use and maintain</li>
              <li>Excellent customer support</li>
              <li>Free shipping available</li>
            </ul>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="related-products-grid">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="related-product-card">
                <img src={p.image} alt={p.name} />
                <h4>{p.name}</h4>
                <p className="related-price">₨{p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
