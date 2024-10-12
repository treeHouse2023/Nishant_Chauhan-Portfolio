import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const skillsData = [
  {
    "id": 1,
    "title": "Web Development",
    "description": "Building responsive and interactive web applications using modern technologies.",
    "price": "Custom Pricing",
    "features": ["HTML, CSS, JavaScript", "React and Tailwind CSS", "Cross-browser compatibility"],
    "image": "web.png"
  },
  {
    "id": 2,
    "title": "Video Editing",
    "description": "Creating engaging and high-quality video content tailored to client needs.",
    "price": "₹350/reel, ₹650 for long video (up to 10 min)",
    "features": ["Concise technical tutorials", "Attention to detail", "Storytelling techniques"],
    "image": "video.png"
  },
  {
    "id": 3,
    "title": "Digital Marketing",
    "description": "Developing data-driven marketing strategies to enhance brand visibility.",
    "price": "Custom Pricing",
    "features": ["Social media management", "Ad campaign optimization", "Performance analysis"],
    "image": "dg.png"
  },
  {
    "id": 4,
    "title": "Photography",
    "description": "Capturing high-quality images for various projects.",
    "price": "₹1,199",
    "features": ["Event and portrait photography", "Editing and retouching", "Creative direction"],
    "image": "cam.png"
  },
  {
    "id": 5,
    "title": "Article Writing",
    "description": "Creating informative and engaging articles tailored for target audiences.",
    "price": "₹999",
    "features": ["Research and fact-checking", "SEO optimization", "Creative content strategies"],
    "image": "art.png"
  },
  {
    "id": 6,
    "title": "Social Media Management",
    "description": "Boost your online presence with tailored content and community engagement strategies.",
    "price": "₹2,499",
    "features": [
      "Content creation and scheduling",
      "Community engagement and management",
      "Performance analytics and reporting"
    ],
    "image": "soc.png"
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const scrollContainerRef = useRef(null);

  // Scroll animation when an element enters view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('skills-animate');
        } else {
          entry.target.classList.remove('skills-animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.skills-skill-card');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // Define the scrollToSection function here for smooth scrolling and modal close
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      // Close modal after scrolling
      setSelectedSkill(null);
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-section-title">My Expertise</h2>
      <div className="skills-scroll-container" ref={scrollContainerRef}>
        {skillsData.map((skill) => (
          <div key={skill.id} className="skills-skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <button onClick={() => handleSkillClick(skill)} className="skills-plus-icon">+</button>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="skills-modal">
          <div className="skills-modal-content">
            <img src={selectedSkill.image} alt={selectedSkill.title} className="skills-modal-thumbnail" />
            <div className="skills-modal-details">
              <button className="skills-close-modal" onClick={closeModal}>X</button>
              <h3>{selectedSkill.title}</h3>
              <p>{selectedSkill.description}</p>
              <h4>Starts at {selectedSkill.price}</h4>
              <h4>Key Features</h4>
              <ul>
                {selectedSkill.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="skills-modal-buttons">
                {/* Buttons now scroll and close the modal */}
                <button className="skills-get-started-btn" onClick={() => scrollToSection('services')}>Get Started</button>
                <button className="skills-get-started-btn" onClick={() => scrollToSection('contact')}>E-mail</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
