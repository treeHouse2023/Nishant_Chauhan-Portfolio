import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Motivation.css';
import portImage from '../assets/port.jpg'; // Adjust the path as needed

const Motivation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation happens only once
    });

    // Smooth scroll effect for elements
    const handleScroll = () => {
      const elements = document.querySelectorAll('.motivation-paragraph, .motivation-heading, .closing-paragraph, .motivation-image');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="motivation-section">
      <div className="motivation-container">
        <div className="image-container" data-aos="fade-right">
          <img
            src={portImage}
            alt="React Developer"
            className="motivation-image"
          />
        </div>
        <div className="text-container" data-aos="fade-left">
          <h2 className="motivation-heading">
            More Than Just a Job
          </h2>
          <p className="motivation-paragraph">
            Web design is more than a job—it's an outlet for my creativity and vision. I don’t just build websites; I craft digital experiences that tell stories, showcase brands, and have the power to change lives. Every design, every line of code, every pixel holds purpose.
          </p>
          <p className="motivation-paragraph">
            As the web expands, so do the possibilities. I'm driven by the rush of seeing ideas come to life, knowing they can inform, entertain, and inspire. Whether sketching out designs or coding responsive layouts, I blend art and technology to shape the future of the web.
          </p>
          <p className="motivation-paragraph">
            Flexibility fuels my creativity. I thrive in both remote and dynamic agency settings, where every project pushes my boundaries. I live for the moment when the project goes live—when my vision transforms into reality.
          </p>
          <p className="closing-paragraph">
            Let’s create something extraordinary together. The web is my canvas, and the possibilities are limitless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
