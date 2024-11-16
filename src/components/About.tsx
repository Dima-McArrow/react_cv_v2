import "./About.css";
import { TypewriterComponent } from "./Message";

export const About = () => {
  return (
    <section className="section_about" id="about">
      <article>
        <div className="about_container">
          <div className="about_left">
            <div className="picture_container">
              <div className="border_container">
                <svg className="picture_frame" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="92" />
                </svg>
                <svg className="picture_frame_reverse" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="92" />
                </svg>
              </div>
              <div className="picture"></div>
            </div>
            <div className="name_container">
              <div className="dima">
                <span className="tag">&lt;</span>Dimitri
              </div>
              <div className="makarov">
                Makarov<span className="closing_slash">&nbsp;/</span>
                <span className="tag">&gt;</span>
              </div>
            </div>
            <div className="title_container">Full-Stack Developer</div>
          </div>
          <div className="about_right">
            <div className="summary_title">
              <span className="tag">&lt;</span>Summary
              <span className="closing_slash">&nbsp;/</span>
              <span className="tag">&gt;</span>
            </div>
            <TypewriterComponent />
            <div className="download_cv">
              <a
                href="DimitriMakarovResume.pdf"
                className="cta-button"
                download
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
                    stroke="#0b0c10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
