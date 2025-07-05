import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    //todo: Home Page Video -
    const video = {
        src: 'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/S3Y0J7dQvkeg08nbn/videoblocks-aerial-view-of-mumbai-city-maharashtra-india-beautiful-weather-in-mumbai-du_hjx5jzdzp__b29931c8454822c05936bf19ce0b813e__P360.mp4'
    }

    return (
        <>
            <Navbar />

            <div className="home-container">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-overlay"></div>
                    <div className="video-container">
                        <video src={video.src} autoPlay muted loop playsInline style={{ width: "100%", height: "auto", borderRadius: "10px" }}></video>
                    </div>
                    <div className="hero-content">
                        <div className="company-logo">
                            <h1 className="company-name">Mangoleaf Developers</h1>
                            <p className="company-subtitle">Private Limited</p>
                        </div>
                        <div className="hero-text">
                            <h2 className="hero-title">Building Dreams, Creating Futures</h2>
                            <p className="hero-description">
                                At Mangoleaf Developers, we are committed to redefining urban development with a focus on low-cost, affordable housing integrated seamlessly with industrial and commercial infrastructure. We believe that sustainable development is the foundation for inclusive growth, and our projects are designed to empower families, workers, and industries with smart, efficient, and dignified living spaces.
                            </p>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="building-silhouette"></div>
                    </div>
                </section>

                {/* Welcome Section */}
                <section className="welcome-section">
                    <div className="container">
                        <div className="welcome-header">
                            <h2 className="section-title">Welcome to Mangoleaf Developers Private Limited</h2>
                        </div>

                        <div className="content-grid">
                            <div className="content-block">
                                <div className="content-text">
                                    <p>
                                        At Mangoleaf Developers Private Limited, we transform dreams into reality by creating
                                        world-class residential and commercial spaces that redefine urban living. With a vision
                                        rooted in innovation, sustainability, and excellence, our real estate projects are
                                        designed to offer luxury, comfort, and long-term value.
                                    </p>
                                </div>
                            </div>

                            <div className="content-block">
                                <div className="content-text">
                                    <p>
                                        From concept to completion, we focus on quality craftsmanship, cutting-edge architecture,
                                        and timely delivery. Whether it's modern apartments, gated communities, or commercial hubs,
                                        every project reflects our commitment to customer satisfaction and environmental responsibility.
                                    </p>
                                </div>
                            </div>

                            <div className="content-block">
                                <div className="content-text">
                                    <p>
                                        Backed by a team of experienced architects, engineers, and planners, Mangoleaf Developers
                                        is setting new benchmarks in the real estate industry. We carefully select prime locations
                                        to ensure convenience, connectivity, and a better quality of life for our customers.
                                    </p>
                                </div>
                            </div>

                            <div className="content-block">
                                <div className="content-text">
                                    <p>
                                        Explore our ongoing and completed projects, discover your ideal living space, and
                                        experience real estate with a difference. At Mangoleaf Developers, your future begins here.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="container">
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🏗️</div>
                                <h3>Quality Craftsmanship</h3>
                                <p>Excellence in every detail with premium materials and construction</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">🌿</div>
                                <h3>Sustainable Living</h3>
                                <p>Environmentally responsible designs for a greener future</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">📍</div>
                                <h3>Prime Locations</h3>
                                <p>Strategic locations ensuring connectivity and convenience</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">⏰</div>
                                <h3>Timely Delivery</h3>
                                <p>Committed to delivering projects on schedule</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2 className="cta-title">Ready to Build Your Future?</h2>
                            <p className="cta-text">
                                Contact us today to learn more about our offerings or to schedule a site visit.
                                Let's build something extraordinary together.
                            </p>
                            <div className="cta-buttons">
                                <Link to="/contact"><button className="cta-button primary">Contact Us</button></Link>
                                <Link to="/project">
                                    <button className="cta-button secondary">View Projects</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-brand">
                                <h3>Mangoleaf Developers</h3>
                                <p>Private Limited</p>
                            </div>
                            <div className="footer-text">
                                <p>&copy; 2025 Mangoleaf Developers Private Limited. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Home