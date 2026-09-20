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
        <div className="svg_wrapper">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8    S16.4,20,12,20z" />
            <path d="M12.7,9.3c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l2.3-2.3l2.3,2.3c0.2,0.2,0.5,0.3,0.7,0.3    s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L12.7,9.3z" />
          </svg>
        </div>
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
