import React from 'react';
import './Project.css'

const Project = () => {

  return (
    <>
      <section id="project-section">
        <div className="project-container">
          <h1 className="project-heading">Our Flagship Project</h1>

          {/* Video Placeholder */}
          <div className="project-img">
            <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-90f0-61f8-a78b-0339a7f8d805/raw?se=2025-07-05T05%3A45%3A26Z&sp=r&sv=2024-08-04&sr=b&scid=e037191b-987f-5989-b67e-949e444afa90&skoid=71e8fa5c-90a9-4c17-827b-14c3005164d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-04T14%3A10%3A33Z&ske=2025-07-05T14%3A10%3A33Z&sks=b&skv=2024-08-04&sig=qG5eGWBM9c7cR16VtimEi39jsROn/bnZ5LZJekPeQvs%3D" alt="Housing Project" />
          </div>

          {/* Main Project Info */}
          <div className="project-box">
            <h2>Mangoleaf Affordable Housing Communities</h2>
            <p>
              Our core project is focused on developing low-cost housing colonies strategically located near industrial parks, SEZs, commercial zones, and logistics hubs. These communities are designed to provide a balance of affordability, accessibility, and comfort.
            </p>
          </div>

          {/* Key Features */}
          <div className="project-box project-flex-row">
            <div className="project-content">
              <h3>Key Features</h3>
              <ul>
                <li>1BHK, 2BHK, and studio apartments priced for affordability</li>
                <li>Inbuilt infrastructure for water, sanitation, and power</li>
                <li>Proximity to job centers and public transport</li>
                <li>Integrated schools, clinics, and retail spaces</li>
                <li>Green parks, community centers, and safety features</li>
              </ul>
            </div>
          </div>

          {/* Target Areas */}
          <div className="project-box">
            <h3>Target Areas</h3>
            <ul>
              <li>Phase 1: Coimbatore, Tamil Nadu</li>
              <li>Phase 2: Andhra Pradesh, Maharashtra, Odisha</li>
              <li>Focused on textile, manufacturing, agro-processing, and tech parks</li>
            </ul>
          </div>

          {/* Industrial Alignment */}
          <div className="project-box">
            <h3>Industrial Alignment</h3>
            <p>
              We actively work with industrial developers, RWA bodies, smart city missions, and SEZ builders to reduce employee commute, improve retention, and promote holistic urbanization.
            </p>
            <ul>
              <li>Reduce employee commute time</li>
              <li>Improve retention and satisfaction</li>
              <li>Provide social stability for families</li>
              <li>Drive holistic urbanization in Tier 2 and 3 cities</li>
            </ul>
          </div>

          {/* Partnerships */}
          <div className="project-box">
            <h3>Partnerships & Government Collaboration</h3>
            <ul>
              <li>State Urban Development Authorities</li>
              <li>PMAY, Make in India, Housing for All</li>
              <li>CSR Programs for Corporate Housing</li>
              <li>PPP scalable frameworks for long-term impact</li>
            </ul>
          </div>

          {/* Sustainability */}
          <div className="project-box">
            <h3>Sustainability & Innovation</h3>
            <ul>
              <li>Eco-friendly construction materials</li>
              <li>Solar rooftops, energy-efficient layouts</li>
              <li>Rainwater harvesting, STP integration</li>
              <li>Tech-enabled security & community apps</li>
            </ul>
          </div>

          {/* Investors */}
          <div className="project-box project-contact-cta">
            <h3>Investor Relations</h3>
            <p>
              Mangoleaf Developers welcomes equity and impact investment partners to scale affordable housing across India’s industrial growth zones.
            </p>
            <p>👉 Contact us for Pitch Deck | Investor Brief | Joint Development Models</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project; 