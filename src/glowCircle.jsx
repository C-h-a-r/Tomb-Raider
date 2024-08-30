import React, { useEffect, useState } from "react";
import "./GlowCircle.css";

const GlowCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInput, setIsHoveringInput] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setIsHoveringInput(true);
    };

    const handleMouseLeave = () => {
      setIsHoveringInput(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add event listeners to input elements
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.addEventListener("mouseenter", handleMouseEnter);
      input.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      // Clean up input event listeners
      inputs.forEach((input) => {
        input.removeEventListener("mouseenter", handleMouseEnter);
        input.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`glow-circle ${isHoveringInput ? "hovering-input" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default GlowCircle;
