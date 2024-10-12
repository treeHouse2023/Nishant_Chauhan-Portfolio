import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  // Intersection Observer for detecting when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`about-container ${isVisible ? 'in-view' : ''}`}
      ref={aboutRef}
    >
      <h1 className="intro-text">More About Nishant Chauhan</h1>
      <p className="passion-text">
        My expertise in modern web development, video editing, and digital marketing shines through in my work.
      </p>
      <p className="main-text">
        I'm on the cutting edge of web technologies like React, Tailwind CSS, and JavaScript, bringing creative and
        efficient web applications to life. Though my approach may involve unconventional methods, my dedication to
        delivering high-quality results is unmatched. I thrive on finding "unexpected solutions" and believe that with
        the right perspective, technology can transform user experiences.
      </p>
      <a href="/Nishant.pdf" className="cta-button" download>Download Resume</a> {/* This link will download the resume */}
    </section>
  );
};

export default About;
