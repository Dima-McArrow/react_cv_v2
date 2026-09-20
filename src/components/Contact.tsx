import "./Contact.css";
import { Social } from "./Social";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <section id="contact" className="section_contact">
      <h2>
        contactMe<span className="brackets">()</span>
      </h2>
      <div data-aos="fade-up" className="contact-form_wrapper">
        <form
          id="resume-contact_form"
          action="https://formspree.io/f/xqakqyre"
          method="POST"
        >
          <div className="name-input_wrapper">
            <input
              name="user_name"
              className="contact_input"
              type="text"
              placeholder="Enter your name please ... *"
              required
            />
          </div>
          <div className="email-input_wrapper">
            <input
              name="user_email"
              className="contact_input"
              type="email"
              placeholder="Enter your email please ... *"
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
          </div>
          <div className="message-input_wrapper">
            <textarea
              className="contact_input"
              name="message"
              placeholder="Enter your message ..."
            ></textarea>
          </div>
          <div className="massage-mandatory-fields">
            <sup>*</sup> Required fields
          </div>
          <button className="contact_button" type="submit">
            Send
          </button>
        </form>
      </div>
      <Social />
    </section>
  );
};
