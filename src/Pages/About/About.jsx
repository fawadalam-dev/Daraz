import { Link } from "react-router"
import "./About.css"

function About() {
    return (
        <div className="about-container">
            <Link to="/" className="back-link">← Back to Home</Link>
            
            <div className="about-content">
                <h1>About DARAZ</h1>
                
                <div className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        DARAZ is South Asia's leading online marketplace platform, connecting millions of 
                        buyers and sellers. We're committed to making online shopping easy, convenient, 
                        and accessible to everyone.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to empower entrepreneurs and small businesses to reach customers 
                        across borders, and to provide consumers with a wide selection of quality products 
                        at competitive prices.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Why Choose Us?</h2>
                    <ul className="features-list">
                        <li>✓ Wide Selection - Over millions of products from thousands of sellers</li>
                        <li>✓ Best Prices - Competitive pricing and daily deals</li>
                        <li>✓ Secure Payments - Safe and secure payment options</li>
                        <li>✓ Fast Delivery - Quick and reliable shipping</li>
                        <li>✓ Customer Support - 24/7 customer service</li>
                        <li>✓ Easy Returns - Hassle-free return policy</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>Our Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Electronics</h3>
                            <p>Latest gadgets and devices</p>
                        </div>
                        <div className="service-card">
                            <h3>Fashion</h3>
                            <p>Trendy clothes and accessories</p>
                        </div>
                        <div className="service-card">
                            <h3>Home & Garden</h3>
                            <p>Everything for your home</p>
                        </div>
                        <div className="service-card">
                            <h3>Beauty</h3>
                            <p>Cosmetics and personal care</p>
                        </div>
                    </div>
                </div>

                <div className="about-cta">
                    <h2>Ready to Shop?</h2>
                    <Link to="/" className="cta-button">Start Shopping Now</Link>
                </div>
            </div>
        </div>
    )
}

export default About