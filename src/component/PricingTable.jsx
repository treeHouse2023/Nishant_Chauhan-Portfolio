import React, { useState } from 'react';
import './PricingTable.css';

const PricingTable = () => {
  const [isSubscription, setIsSubscription] = useState(false);

  const handleToggle = () => {
    setIsSubscription(!isSubscription);
  };

  // Scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-bold">Pricing</h1>
        <p className="fs-5 text-secondary">
          Choose a plan that fits your business needs. Simple, flexible, and affordable.
        </p>

        {/* Toggle Button */}
        <div className="toggle-container">
          <div className={`toggle ${isSubscription ? 'subscription' : 'per-project'}`} onClick={handleToggle}>
            <span className="toggle-option">PER PROJECT</span>
            <span className="toggle-option">SUBSCRIPTION</span>
            <div className="toggle-slider"></div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {isSubscription ? (
          <>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0">Web Development (Subscription)</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Custom Pricing</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Responsive design</li>
                    <li>Performance optimization</li>
                    <li>Cross-browser compatibility</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-light" onClick={() => scrollToSection('contact')}>Contact Us</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0">Video Editing (Subscription)</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Custom Pricing<small>/month</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 reels (up to 2 revisions each)</li>
                    <li>Consistent content creation</li>
                    <li>Professional storytelling</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-light" onClick={() => scrollToSection('contact')}>Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0">Digital Marketing (Subscription)</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Custom Pricing</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Targeted campaigns</li>
                    <li>SEO optimization</li>
                    <li>Social media management</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-light" onClick={() => scrollToSection('contact')}>Contact Us</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0">Web Development</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Custom Pricing</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Responsive websites</li>
                    <li>User-centered design</li>
                    <li>Cross-platform compatibility</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-light" onClick={() => scrollToSection('contact')}>Get started</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0">Video Editing</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Custom Pricing <small>(Long Videos | Reels) </small> </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Up to 2 revisions</li>
                    <li>Tailored for engagement</li> 
                    <li>Responsive to social media needs</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-light" onClick={() => scrollToSection('contact')}>Get started</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0">Digital Marketing</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Custom Pricing</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Targeted ad campaigns</li>
                    <li>Social media management</li>
                    <li>Performance analytics</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-light" onClick={() => scrollToSection('contact')}>Get started</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PricingTable;
