import React, { useEffect, useState } from "react";
import "./CustomCursor.css"; 

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorColor, setCursorColor] = useState("white");

  const moveCursor = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });

    // Detect element under the cursor
    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
    
    if (hoveredElement) {
      const bgColor = window.getComputedStyle(hoveredElement).backgroundColor;

      // Toggle cursor color based on the background color of the hovered element
      if (bgColor === "rgb(255, 255, 255)") {
        setCursorColor("black");
      } else {
        setCursorColor("white");
      }
    }
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset after animation
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicked ? "clicked" : ""} ${isHovered ? "hovered" : ""}`}
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        backgroundColor: cursorColor // Dynamic color change
      }}
    />
  );
};

export default CustomCursor;
