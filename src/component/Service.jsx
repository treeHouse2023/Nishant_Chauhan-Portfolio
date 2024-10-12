import React from "react";
import "./Service.css";

const Services = () => {
  return (
    <section className="services-section scroll-reveal" id="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">
          Delivering high-quality services in Web Development, Digital Marketing, and Video Editing to help you grow your business.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              I build custom web solutions from scratch—whether front-end or full-stack—guaranteeing excellent performance and creative execution tailored to your business needs.
            </p>
          </div>

          <div className="service-card">
            <h3>Video Editing</h3>
            <p>
              From professional freelancing to video editing services, I handle project management, creative collaboration, and high-quality, on-time deliveries.
            </p>
          </div>

          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>
              Implementing powerful digital marketing strategies, including SEO optimization, targeted social media campaigns, and branding, to boost your online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
