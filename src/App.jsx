import React from "react";
import PersonalInfo from './component/PersonalInfo';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Skills from './component/Skills';
import ProjectDisplay from './component/ProjectDisplay';
import Feedbackcard from './component/Feedbackcard';
import Motivation from './component/Motivation';
import Faq from './component/Faq';
import PricingTable from './component/PricingTable';
import ScrollToTop from './component/ScrollToTop';  // Import the ScrollToTop component
import CustomCursor from './component/CustomCursor';  // Import the CustomCursor component
import VideoPortfolio from './component/VideoPortfolio'; // Import VideoPortfolio component
import DesignPortfolio from './component/DesignPortfolio'; // Import DesignPortfolio component

function App() {
  return (
    <div>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Personal Info (Hero section) */}
      <PersonalInfo />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectDisplay />
      </section>

      {/* Video Portfolio Section */}
      <section id="video-portfolio">
        <VideoPortfolio />
      </section>

      {/* Design Portfolio Section */}
      <section id="design-portfolio">
        <DesignPortfolio />
      </section>

      {/* Feedback Section */}
      <section id="feedback">
        <Feedbackcard />
      </section>

      {/* Motivation Section */}
      <section id="motivation">
        <Motivation />
      </section>

      {/* Services Section */}
      <section id="services">
        <Service />
      </section>

      {/* Pricing Table Section */}
      <section id="PricingTable">
        <PricingTable />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <Faq />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
