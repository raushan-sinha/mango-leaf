import React from "react";
import './About.css'
import Navbar from "../components/Navbar";

const About = () => {
    //todo: Images -
    const aboutImages = {
        img1: 'https://plus.unsplash.com/premium_photo-1658507004901-b56180ba364e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hvJTIwd2UlMjBhcmV8ZW58MHx8MHx8fDA%3D',
        img2: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hvJTIwd2UlMjBhcmV8ZW58MHx8MHx8fDA%3D',
        img3: 'https://media.istockphoto.com/id/1283030328/photo/silhouette-of-businessman-holding-target-board-on-the-top-of-mountain-with-over-blue-sky-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=KATa6oakwXiPK5QZYmoTofnF_r7qGppyKULXaIpeA6Y='
    }

    return (
        <>
            <Navbar />

            <section id="about-section">
                <div className="about-container">
                    <h1 className="about-heading">About Us</h1>

                    <div className="about-box">
                        <div className="about-image">
                            <img src={aboutImages.img1} alt="Who We Are" />
                        </div>
                        <div className="about-content">
                            <h2>Who We Are</h2>
                            <p>
                                Mangoleaf Developers Private Limited is a new-age real estate development firm driven by the mission to bridge the housing gap in India’s fast-growing industrial regions. Backed by seasoned professionals and social visionaries, we specialize in affordable housing solutions that go beyond basic shelter—offering accessibility, sustainability, and community empowerment.
                            </p>
                        </div>
                    </div>

                    <div className="about-box reverse">
                        <div className="about-image">
                            <img src={aboutImages.img2} alt="Our Vision" />
                        </div>
                        <div className="about-content">
                            <h2>Our Vision</h2>
                            <p>
                                To be a leading catalyst in creating affordable, high-quality housing ecosystems for India’s working-class and middle-income families in alignment with industrial growth corridors.
                            </p>
                        </div>
                    </div>

                    <div className="about-box">
                        <div className="about-image">
                            <img src={aboutImages.img3} alt="Our Mission" />
                        </div>
                        <div className="about-content">
                            <h2>Our Mission</h2>
                            <ul>
                                <li>Deliver affordable, well-planned, and scalable housing communities</li>
                                <li>Integrate housing with proximity to employment zones and industrial clusters</li>
                                <li>Partner with government and private sectors under housing-for-all initiatives</li>
                                <li>Build smart, green, and inclusive neighborhoods</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About