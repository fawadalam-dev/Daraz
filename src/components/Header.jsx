import { Link } from "react-router";
import { useState } from "react";
import "./Header.css";

function Header({ cartCount }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/products/Daraz-Logo.png" alt="Daraz Logo" className="logo-image" />
        </Link>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart ({cartCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
