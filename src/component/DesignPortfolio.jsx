import React, { useState } from "react";
import "./DesignPortfolio.css";

const designItems = [
  { id: 28, image: "/post/28.png", title: "Graphic Design" },
  { id: 29, image: "/post/29.png", title: "Graphic Design" },

  { id: 31, image: "/post/31.png", title: "Graphic Design" },
  { id: 32, image: "/post/32.png", title: "Graphic Design" },
  { id: 33, image: "/post/33.png", title: "Graphic Design" },
  { id: 34, image: "/post/34.png", title: "Graphic Design" },
  { id: 35, image: "/post/35.png", title: "Graphic Design" },
  { id: 13, image: "/post/13.heic", title: "Graphic Design" },
  { id: 14, image: "/post/14.png", title: "Graphic Design" },
  { id: 15, image: "/post/15.heic", title: "Graphic Design" },
  { id: 16, image: "/post/16.heic", title: "Graphic Design" },
  { id: 36, image: "/post/36.png", title: "Graphic Design" },
  { id: 37, image: "/post/37.png", title: "Graphic Design" },
  { id: 7, image: "/post/7.png", title: "Graphic Design" },
  { id: 8, image: "/post/8.heic", title: "Graphic Design" },
  { id: 17, image: "/post/17.png", title: "Graphic Design" },
  { id: 18, image: "/post/18.heic", title: "Graphic Design" },
  { id: 1, image: "/post/1.heic", title: "Graphic Design" },
  { id: 2, image: "/post/2.jpg", title: "Graphic Design" },
  { id: 5, image: "/post/5.png", title: "Graphic Design" },
  { id: 6, image: "/post/6.heic", title: "Graphic Design" },
  { id: 26, image: "/post/26.png", title: "Graphic Design" },
  { id: 27, image: "/post/27.png", title: "Graphic Design" },
  { id: 3, image: "/post/3.png", title: "Graphic Design" },
  { id: 4, image: "/post/4.heic", title: "Graphic Design" },
  { id: 19, image: "/post/19.png", title: "Graphic Design" },
  { id: 20, image: "/post/20.heic", title: "Graphic Design" },
  { id: 21, image: "/post/21.heic", title: "Graphic Design" },
  { id: 9, image: "/post/9.heic", title: "Graphic Design" },
  { id: 30, image: "/post/30.png", title: "Graphic Design" },
  { id: 10, image: "/post/10.png", title: "Graphic Design" },
  { id: 11, image: "/post/11.heic", title: "Graphic Design" },
  { id: 12, image: "/post/12.png", title: "Graphic Design" },
  { id: 22, image: "/post/22.png", title: "Graphic Design" },
  { id: 23, image: "/post/23.heic", title: "Graphic Design" },
  { id: 24, image: "/post/24.png", title: "Graphic Design" },
  { id: 25, image: "/post/25.heic", title: "Graphic Design" },
  { id: 38, image: "/post/38.png", title: "Graphic Design" },
];

const DesignPortfolio = () => {
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (image) => {
    setActiveImage(image);
  };

  const closeModal = () => {
    setActiveImage(null);
  };

  return (
    <section className="design-portfolio" id="design-portfolio">
      <h2 className="portfolio-title">Design Portfolio</h2>
      <div className="portfolio-grid">
        {designItems.map((item) => (
          <div
            className="portfolio-item"
            key={item.id}
            onClick={() => openModal(item.image)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="portfolio-image"
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {activeImage && (
        <div className="modal active" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>
            &times;
          </span>
          <img src={activeImage} alt="Enlarged Design" className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default DesignPortfolio;
