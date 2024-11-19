import "./Social.css";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Social = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-delay="300" className="social_links">
      <Github />
      <Linkedin />
    </div>
  );
};
