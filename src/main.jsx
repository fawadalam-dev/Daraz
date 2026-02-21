import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Pages/About/About.jsx'
import Product from './Pages/Products/Product.jsx'
import Cart from './Pages/Cart/Cart.jsx'

function Root() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    )
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId)
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <App
              cartCount={cartCount}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/product/:id"
          element={<Product onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
