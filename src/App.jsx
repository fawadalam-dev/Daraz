import { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import { products, categories } from './data/products'
import './App.css'

function App({ cartCount, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="app">
      <Header cartCount={cartCount} />

      <main className="main-content">
        <section className="hero-banner">
          <div className="hero-content">
            <h1>Welcome to DARAZ</h1>
            <p>Find the best deals on thousands of products</p>
          </div>
        </section>

        <section className="categories-section">
          <div className="categories-container">
            <h2>Shop by Category</h2>
            <div className="categories-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
          <div className="products-container">
            <h2>
              {selectedCategory === 'All'
                ? 'All Products'
                : `${selectedCategory} Products`}
            </h2>
            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))
              ) : (
                <p className="no-products">
                  No products found in this category
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
        <div className="footer-content">
          <div className="footer-section">
            <h4>About DARAZ</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Help & Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Policy</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Shipping Info</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 DARAZ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
