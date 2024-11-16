import { useState, useEffect } from "react";
import "./ToTop.css";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const skillsPosition = skillsSection?.getBoundingClientRect();

      if (
        skillsPosition &&
        skillsPosition.top <= window.innerHeight &&
        window.scrollY > 0
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        className={`to-top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        onMouseEnter={() => setIsDescriptionVisible(true)}
        onMouseLeave={() => setIsDescriptionVisible(false)}
      >
        ⬆
      </button>
      <div
        className={`button_to-top_description ${
          isDescriptionVisible ? "visible" : ""
        }`}
      >
        <p>To top</p>
      </div>
    </>
  );
};

export default ToTopButton;
