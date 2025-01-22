import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const skillsData = [
  {
    "id": 1,
    "title": "Web Development",
    "description": "Designing and building responsive, interactive websites that prioritize performance and user experience. Skilled in modern web technologies to create scalable and visually appealing web applications.",
    "price": "Custom Pricing",
    "features": ["HTML, CSS, JavaScript", "React and Tailwind CSS", "Cross-browser compatibility"],
    "image": "web.png"
  },
  {
    "id": 2,
    "title": "Video Editing",
    "description": "Crafting professional, engaging video content tailored for diverse platforms. Experienced in storytelling, seamless transitions, and visual enhancements to deliver impactful videos.",
    "price": "Custom Pricing",
    "features": ["Concise technical tutorials", "Attention to detail", "Storytelling techniques"],
    "image": "video.png"
  },
  {
    "id": 3,
    "title": "Digital Marketing",
    "description": "Creating data-driven marketing campaigns to enhance your brand's visibility and audience engagement. Specializing in innovative techniques to drive measurable results and boost your online presence.",
    "price": "Custom Pricing",
    "features": ["Social media management", "Ad campaign optimization", "Performance analysis"],
    "image": "dg.png"
  },
  {
    "id": 7,
    "title": "Graphic Designing",
    "description": "Transforming ideas into visually compelling designs for businesses and individuals. Expertise in creating logos, social media graphics, posters, and brand assets that leave a lasting impression.",
    "price": "Custom Pricing",
    "features": [
      "Creative and custom designs",
      "Logo, poster, and brand identity creation",
      "High-resolution graphics for all platforms"
    ],
    "image": "graphic.jpg"
  },
  {
    "id": 4,
    "title": "Photography",
    "description": "Delivering stunning visual content through creative indoor and outdoor photography sessions. Specializing in capturing meaningful moments and bringing artistic precision to every project.",
    "price": "Custom Pricing",
    "features": ["Event and portrait photography", "Editing and retouching", "Creative direction"],
    "image": "cam.png"
  },
  {
    "id": 5,
    "title": "Article Writing",
    "description": "Developing compelling and SEO-friendly content to captivate your audience. Skilled in writing long-form articles, quick-read blogs, and in-depth pieces tailored for maximum engagement.",
    "price": "Custom Pricing",
    "features": ["Research and fact-checking", "SEO optimization", "Creative content strategies"],
    "image": "art.png"
  },
  {
    "id": 6,
    "title": "Social Media Management",
    "description": "Elevate your brand’s online presence with expert content strategies, audience engagement, and performance analytics. Focused on delivering consistent growth and an impactful online identity.",
    "price": "Custom Pricing",
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
