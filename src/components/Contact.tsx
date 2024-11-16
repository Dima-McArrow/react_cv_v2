import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="section_contact">
      <div className="contact-form_wrapper">
        <h3 className="contact_title">Contact me</h3>
        <form
          id="resume-contact_form"
          action="https://formspree.io/f/xqakqyre"
          method="POST"
        >
          <div className="name-input_wrapper">
            <label htmlFor="user_name" className="contact_label">
              Name<sup>*</sup>
            </label>
            <input
              name="user_name"
              className="contact_input"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="emai-input_wrapper">
            <label htmlFor="user_email" className="contact_label">
              Email<sup>*</sup>
            </label>
            <input
              name="user_email"
              className="contact_input"
              type="email"
              placeholder="Email"
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
          </div>
          <div className="message-input_wrapper">
            <label htmlFor="message" className="contact_label">
              Message
            </label>
            <textarea className="contact_input" name="message"></textarea>
          </div>
          <div className="massage-mandatory-fields">
            <sup>*</sup> Required fields
          </div>
          <button className="contact_button" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
