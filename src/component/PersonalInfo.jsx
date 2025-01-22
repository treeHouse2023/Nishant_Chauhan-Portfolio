import React, { useState, useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subtitle, setSubtitle] = useState("Web Developer");

  const subtitles = [
    "I am a Web Developer",
    "I am a Video Editor",
    "I am a Digital Marketer",
    "I am a Graphic Designer",
    "I am an Article Writer",
    "I am a Content Creator",
    "I am a Student",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitle((prev) => {
        const currentIndex = subtitles.indexOf(prev);
        return subtitles[(currentIndex + 1) % subtitles.length];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [subtitles]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <section className="hero" id="home">
      <video autoPlay loop muted className="background-video">
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <div className="logo">
          <FaBriefcase className="logo-icon" />
          <a className="logo-text" onClick={() => scrollToSection("services")}>
            Let's Work Together
          </a>
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("services")}>Services</a>
          <a onClick={() => scrollToSection("video-portfolio")}>Video Portfolio</a>
          <a onClick={() => scrollToSection("design-portfolio")}>Design Portfolio</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">Nishant</h1>
        <h1 className="hero-title1">Chauhan</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <a className="cta-button" onClick={() => scrollToSection("contact")}>
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default PersonalInfo;
