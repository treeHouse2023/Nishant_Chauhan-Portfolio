import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "What is your approach to web development?",
      answer: "I follow an agile approach, focusing on building responsive and interactive web applications using modern technologies."
    },
    {
      question: "What digital marketing strategies do you specialize in?",
      answer: "I specialize in developing data-driven marketing strategies to enhance brand visibility and engagement."
    },
    {
      question: "What video editing software do you use?",
      answer: "I use DaVinci Resolve, Adobe Premiere Pro, and CapCut for creating high-quality video content."
    },
    {
      question: "How do you approach social media management?",
      answer: "I focus on tailored content and community engagement strategies to boost online presence effectively."
    },
    {
      question: "What types of campaigns do you prefer to manage?",
      answer: "I prefer working on campaigns that involve generating leads, improving brand awareness, and driving conversions."
    },
    {
      question: "How do you determine your pricing for services?",
      answer: "My pricing is based on the scope of the project, the complexity of the work, and the time required to complete it. I offer customized quotes for each client."
    },
    {
      question: "What is the typical timeline for a web development project?",
      answer: "The timeline varies depending on the project's complexity, but I generally aim to deliver within 2-4 weeks for most web development projects."
    },
    {
      question: "Can you provide examples of your previous work?",
      answer: "Yes, I can provide a portfolio of my previous projects, showcasing my skills in web development, video editing, and digital marketing."
    },
    {
      question: "How do you measure the success of your marketing campaigns?",
      answer: "I utilize various metrics, including ROI, conversion rates, and engagement levels, to assess the effectiveness of campaigns."
    },
    {
      question: "What is your experience with photography?",
      answer: "I capture high-quality images for various projects, ensuring they align with the overall branding and messaging."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, I offer ongoing support and maintenance services to ensure your project continues to run smoothly after completion."
    },
    {
      question: "How can I get started with a project?",
      answer: "You can reach out to me via the contact form on my website or through my email, and we can discuss your project requirements."
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              {activeIndex === index ? <FaTimes className="icon" /> : <FaPlus className="icon" />}
            </div>
            <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
