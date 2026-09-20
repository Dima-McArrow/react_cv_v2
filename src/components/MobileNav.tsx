import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./MobileNav.css";

import navigation from "../content/navigation.json";
import { Logo } from "./Logo";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // The overlay is position: fixed and must not be affected by any ancestor
  // that creates a containing block, so it is rendered into <body> - the same
  // place the previous imperative version appended it to.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="mobile_nav_wrapper">
      <button
        type="button"
        className="mobile_nav_toggle"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <div className="mobile_menu">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12H8.00901M12.0045 12H12.0135M15.991 12H16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          </svg>
        </div>
      </button>

      {isOpen &&
        createPortal(
          <nav id="mobile_nav" className="mobile_nav">
            <div className="mobile_close_wrapper">
              <div className="mobile_logo">
                <Logo width={35.5} height={23} />
              </div>
              <button
                type="button"
                className="mobile_close_button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 15.5L12.5 12.5M12.5 12.5L15.5 9.5M12.5 12.5L9.5 9.5M12.5 12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
            </div>
            {navigation.links.map((link) => (
              <div key={link.href} className="mobile_link_wrapper">
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </div>
            ))}
          </nav>,
          document.body,
        )}
    </div>
  );
};
