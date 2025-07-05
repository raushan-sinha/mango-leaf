import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <section id="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h1>Contact Us – Mangoleaf Developers Private Limited</h1>
            <p>
              We're here to help you be part of the future of affordable, sustainable living in India.
            </p>
            <p>
              Whether you're a potential homebuyer, an investor, a government body, or a corporate partner, we’d love to hear from you. Our team is ready to provide details about our housing communities, joint development models, CSR collaborations, or investment opportunities.
            </p>
            <p>
              Reach out to explore how Mangoleaf Developers can support your residential, industrial, or social development goals.
            </p>

            <div className="contact-details">
              <p>📍 <strong>Head Office:</strong> [Your Full Address]</p>
              <p>📞 <strong>Phone:</strong> +91-XXXX-XXXXXX</p>
              <p>📧 <strong>Email:</strong> info@mangoleaf.in</p>
              <p>🌐 <strong>Website:</strong> <a href="https://www.mangoleaf.in" target="_blank" rel="noopener noreferrer">www.mangoleaf.in</a></p>
            </div>

            <p className="contact-follow">
              Connect with us via the contact form or follow us on <a href="#">LinkedIn</a> and <a href="#">Instagram</a> to stay updated.
            </p>
          </div>

          <div className="contact-form">
            <form>
              <h2>Send us a message</h2>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 