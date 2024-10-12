import React, { useEffect, useState, useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Importing LinkedIn icon
import './FeedbackCard.css'; // Importing CSS for styling

// Add the feedback data here
const feedbackData = [
  { companyName: 'Batch-Man', feedbackImg: '1.png', personName: '- Karanveer Chouhan', linkedinUrl: 'https://www.linkedin.com/in/thekvc/' },
  { companyName: 'Assistant Professor, DAV UNIVERSITY', feedbackImg: '3.png', personName: '- Dr. Balpreet Kaur', linkedinUrl: 'https://www.linkedin.com/in/dr-balpreet-kaur-a31728a1/' },
  { companyName: 'Assistant Professor, DAV UNIVERSITY', feedbackImg: '4.png', personName: '- Dr. Mukhtiar Singh', linkedinUrl: 'https://www.linkedin.com/in/dr-mukhtiar-singh-03312462/' },
  { companyName: 'Wollvo Design | TraiKare', feedbackImg: '2.png', personName: '- Namish Kashyap', linkedinUrl: 'https://www.linkedin.com/in/namishkashyap/' },
  { companyName: 'Assistant Professor, DAV UNIVERSITY', feedbackImg: '5.png', personName: '- Himanshu Aggarwal', linkedinUrl: 'https://www.linkedin.com/in/himanshu4319/' },
  { companyName: '', feedbackImg: '6.png', personName: '- Vaibhav Chauhan', linkedinUrl: 'https://www.linkedin.com/in/vaibhav-chauhan17/' },
];

const FeedbackList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const feedbackRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (feedbackRef.current) {
      observer.observe(feedbackRef.current);
    }

    return () => {
      if (feedbackRef.current) {
        observer.unobserve(feedbackRef.current);
      }
    };
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="feedback-section" ref={feedbackRef}>
      <h2 className="feedback-heading">Trusted By</h2>
      <p className="feedback-subheading"></p>
      <div className={`feedback-list ${isVisible ? 'fade-in' : ''}`}>
        {feedbackData.map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <img
              src={feedback.feedbackImg}
              alt={`${feedback.companyName} feedback`}
              className="feedback-img"
              onClick={() => handleImageClick(feedback.feedbackImg)}
            />
            <h2 className="company-name">{feedback.companyName}</h2>
            <p className="person-name">
              {feedback.personName}
              {feedback.linkedinUrl && (
                <a
                  href={feedback.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <FaLinkedin />
                </a>
              )}
            </p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>X</button>
            <img src={selectedImage} alt="Selected feedback" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
