import "./Social.css";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";

export const Social = () => {
  return (
    <div className="social_links">
      <Github />
      <Linkedin />
    </div>
  );
};
