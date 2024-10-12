import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaLinkedin, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'; 

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="contact-heading" data-aos="fade-up">
              Get in Touch
            </h2>
            <form
              className="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Hidden input for access key */}
              <input
                type="hidden"
                name="access_key"
                value="1ef5c2bb-348c-4c9d-a22d-1acb5ec90420"
              />

              <div className="form-group" data-aos="fade-right" data-aos-delay="300">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control contact-input"
                  required
                />
              </div>
              <div className="form-group" data-aos="fade-right" data-aos-delay="400">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control contact-input"
                  required
                />
              </div>
              <div className="form-group" data-aos="fade-right" data-aos-delay="500">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-control contact-textarea"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="contact-submit-btn"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="footer-section" data-aos="fade-up" data-aos-delay="900">
          <h4>Let's Connect</h4>
          <div className="footer-icons">
            <a href="mailto:nishant852800@gmail.com">
              <FaEnvelope className="footer-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/nishant-chauhan-870239234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-icon" />
            </a>
            <a
              href="https://twitter.com/nishant852800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="footer-icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSYOttdDx23-dxlJEkuzuzg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="footer-icon" />
            </a>
            <a
              href="https://github.com/treeHouse2023" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer-icon" />
            </a>
          </div>
          <p>© Nishant Chauhan, 2024</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
