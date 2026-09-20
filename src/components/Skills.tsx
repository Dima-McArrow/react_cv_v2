import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

import content from "../content/skills.json";
import moleculer from "../moleculer.png";

type Skill = {
  name: string;
  icon: string;
  // true when the icon ships with the project instead of coming from skillicons
  local?: boolean;
};

type SkillsContent = {
  title: string;
  items: Skill[];
  alsoTitle: string;
  also: string[];
};

const { title, items, alsoTitle, also } = content as SkillsContent;

const localIcons: Record<string, string> = {
  moleculer,
};

const iconUrl = (skill: Skill) =>
  skill.local
    ? localIcons[skill.icon]
    : `https://skillicons.dev/icons?i=${skill.icon}`;

// The tiles animate in rows of three, alternating direction - same as before,
// only now the rows are derived from the list instead of being written by hand.
const ROW_SIZE = 3;
const rows = Array.from(
  { length: Math.ceil(items.length / ROW_SIZE) },
  (_, i) => items.slice(i * ROW_SIZE, i * ROW_SIZE + ROW_SIZE),
);

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <section id="skills" className="section_skills">
      <article>
        <h2 className="h2_skills">
          {title}
          <span className="brackets">()</span>
        </h2>
        <div className="skills_container">
          {rows.map((row, index) => (
            <div
              key={row[0].name}
              data-aos={index % 2 === 0 ? "slide-right" : "slide-left"}
              className="skillsSet"
            >
              {row.map((skill) => (
                <div key={skill.name} className="skill">
                  <p className="p_to_center">
                    <img
                      src={iconUrl(skill)}
                      alt={skill.name}
                      width="48"
                      height="48"
                      loading="lazy"
                    />
                  </p>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Everything in the CV that skillicons.dev has no icon for. */}
        <div data-aos="fade-up" className="skills_also">
          <p className="skills_also_title">{alsoTitle}</p>
          <ul className="skills_also_list">
            {also.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};
