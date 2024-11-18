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
          <div class="mobile_logo">
            <svg
              width="35.5"
              height="23"
              viewBox="0 0 71 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo"
            >
              <path
                d="M0.90625 46V0.5H12.6875C14.7917 0.5 16.7604 0.760417 18.5938 1.28125C20.4271 1.78125 22.0938 2.5 23.5938 3.4375C24.9062 4.20833 26.0729 5.15625 27.0938 6.28125C28.1354 7.38542 29.0417 8.59375 29.8125 9.90625C30.7083 11.5104 31.3958 13.2812 31.875 15.2188C32.375 17.1562 32.625 19.2188 32.625 21.4062V25.1562C32.625 27.2604 32.3958 29.25 31.9375 31.125C31.4792 33 30.8333 34.7188 30 36.2812C29.2083 37.6771 28.2812 38.9688 27.2188 40.1562C26.1562 41.3229 24.9896 42.3021 23.7188 43.0938C22.2396 44.0312 20.6042 44.75 18.8125 45.25C17.0417 45.75 15.1458 46 13.125 46H0.90625ZM9.75 7.625V38.9375H13.125C14.2083 38.9375 15.2188 38.8021 16.1562 38.5312C17.0938 38.2604 17.9479 37.8646 18.7188 37.3438C19.5104 36.8021 20.2188 36.1146 20.8438 35.2812C21.4896 34.4271 22.0417 33.4375 22.5 32.3125C22.875 31.3333 23.1562 30.25 23.3438 29.0625C23.5521 27.8542 23.6562 26.5521 23.6562 25.1562V21.3438C23.6562 20.0312 23.5521 18.7917 23.3438 17.625C23.1562 16.4375 22.875 15.3542 22.5 14.375C22.0417 13.2083 21.4375 12.1667 20.6875 11.25C19.9583 10.3333 19.1042 9.58333 18.125 9C17.375 8.5625 16.5417 8.22917 15.625 8C14.7292 7.75 13.75 7.625 12.6875 7.625H9.75ZM50.3125 0.5L54.625 17.5938L59.5312 0.5H70.4375V46H62.375V32.5312L62.75 11.25L56.7812 31H52.4375L47.0938 12.0938L47.4688 32.5312V46H39.4062V0.5H50.3125Z"
                fill="#C5C6C7"
              />
            </svg>
          </div>
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
      document.documentElement.style.overflow = "hidden";

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
      document.documentElement.style.overflow = "";
    }

    // Cleanup function to remove the mobile navigation element when the component unmounts
    return () => {
      if (mobileNav && document.body.contains(mobileNav)) {
        document.body.removeChild(mobileNav);
      }

      // Enable scrolling
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
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
