import "./ExpTimeline.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import content from "../content/experience.json";

type Link = {
  label: string;
  href: string;
};

type Project = {
  id: string;
  name: string;
  tagline: string;
  context: string;
  start: string;
  highlights: string[];
  end?: string;
  link?: Link;
};

type PreviousRole = {
  role: string;
  company: string;
  location: string;
  period: string;
};

type ExperienceContent = {
  title: string;
  current: {
    role: string;
    employment: string;
    location: string;
    start: string;
    end: string;
    note: string;
  };
  projects: Project[];
  previous: {
    title: string;
    note: string;
    items: PreviousRole[];
  };
};

const { title, current, projects, previous } = content as ExperienceContent;

export const ExpTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <section id="experience" className="section_experience">
      <h2 className="experience_section_title">
        {title}
        <span className="brackets">()</span>
      </h2>

      {/* Umbrella header: every project below belongs to this one period */}
      <div data-aos="fade-up" className="exp_current">
        <h3 className="exp_current_role">{current.role}</h3>
        <h4 className="exp_current_employment">{current.employment}</h4>
        <p className="exp_current_period">
          {current.start} — {current.end} · {current.location}
        </p>
        <p className="exp_current_note">{current.note}</p>
      </div>

      <div className="timeline">
        {projects.map((project) => (
          <div key={project.id} data-aos="fade-up" className="timeline-item">
            <div className="circle"></div>
            <div className="content">
              <div className="banner">
                <div className="date left">
                  <span>{project.start}</span>
                </div>
                {project.end && (
                  <>
                    <div className="connector"></div>
                    <div className="date right">
                      <span>{project.end}</span>
                    </div>
                  </>
                )}
              </div>
              <h3>{project.name}</h3>
              <h5>{project.tagline}</h5>
              <p className="exp_country">
                {project.context}
                {project.link && (
                  <>
                    {" · "}
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="exp_link"
                    >
                      {project.link.label}
                    </a>
                  </>
                )}
              </p>
              {project.highlights.map((highlight) => (
                <p key={highlight}>{highlight}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div data-aos="fade-up" className="exp_previous">
        <h3 className="exp_previous_title">{previous.title}</h3>
        <p className="exp_previous_note">{previous.note}</p>
        <ul className="exp_previous_list">
          {previous.items.map((item) => (
            <li key={item.role} className="exp_previous_item">
              <span className="exp_previous_period">{item.period}</span>
              <span className="exp_previous_role">{item.role}</span>
              <span className="exp_previous_company">
                {item.company} · {item.location}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
