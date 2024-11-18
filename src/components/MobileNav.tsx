import { useState, useEffect } from "react";
import "./MobileNav.css";

export const MobileNav = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    let mobileNav: HTMLElement | null = null;

    if (isCheckboxChecked) {
      // Create the mobile navigation element
      mobileNav = document.createElement("nav");
      mobileNav.id = "mobile_nav";
      mobileNav.className = "mobile_nav";
      mobileNav.innerHTML = `
        <div class="mobile_close_wrapper">
          <button class="mobile_close_button">
            <svg width="40px" height="40px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 15.5L12.5 12.5M12.5 12.5L15.5 9.5M12.5 12.5L9.5 9.5M12.5 12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" stroke="#c5c6c7" stroke-width="1.2"/>
</svg>
          </button>
        </div>
        <div class="mobile_link_wrapper">
          <a href="#skills">Tech Stack</a>
        </div>
        <div class="mobile_link_wrapper">
          <a href="#skill_cloud">Skills Cloud</a>
        </div>
        <div class="mobile_link_wrapper">
          <a href="#projects">Projects</a>
        </div>
        <div class="mobile_link_wrapper">
          <a href="#experience">Experience</a>
        </div>
        <div class="mobile_link_wrapper">
          <a href="#education">Education</a>
        </div>
        <div class="mobile_link_wrapper">
          <a href="#contact">Contact</a>
        </div>
      `;
      document.body.appendChild(mobileNav);

      // Disable scrolling
      document.body.style.overflow = "hidden";

      // Add event listener to the close button
      const closeButton = mobileNav.querySelector(".mobile_close_button");
      if (closeButton) {
        closeButton.addEventListener("click", () => {
          setIsCheckboxChecked(false);
        });
      }

      // Add event listeners to the links
      const links = mobileNav.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", () => {
          setIsCheckboxChecked(false);
        });
      });
    } else {
      // Remove the mobile navigation element if it exists
      mobileNav = document.getElementById("mobile_nav");
      if (mobileNav) {
        document.body.removeChild(mobileNav);
      }

      // Enable scrolling
      document.body.style.overflow = "";
    }

    // Cleanup function to remove the mobile navigation element when the component unmounts
    return () => {
      if (mobileNav && document.body.contains(mobileNav)) {
        document.body.removeChild(mobileNav);
      }

      // Enable scrolling
      document.body.style.overflow = "";
    };
  }, [isCheckboxChecked]);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <div className="mobile_nav_wrapper">
      <input
        type="checkbox"
        className="nav__switch"
        id="nav__switch"
        checked={isCheckboxChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="nav__switch" className="nav__switch_label">
        <div className="mobile_menu">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8 12H8.00901M12.0045 12H12.0135M15.991 12H16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />{" "}
            </g>
          </svg>
        </div>
      </label>
    </div>
  );
};
