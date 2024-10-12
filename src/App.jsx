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

function App() {
  return (
    <div>
      <PersonalInfo />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <ProjectDisplay />
      </section>
      <section id="feedback">
        <Feedbackcard />
      </section>
      <section id="motivation">
        <Motivation />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="PricingTable">
        <PricingTable />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </div>
  );
}

export default App;
