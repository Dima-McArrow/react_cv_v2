import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <section id="skills" className="section_skills">
      <article>
        <h2 className="h2_skills">
          stack<span className="brackets">()</span>
        </h2>
        <div className="skills_container">
          <div data-aos="slide-right" className="skillsSet">
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=git" alt="Git" />
              </p>
              <p>Git</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
              </p>
              <p>GitHub</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=gitlab" alt="GitLab" />
              </p>
              <p>GitLab</p>
            </div>
          </div>
          <div data-aos="slide-left" className="skillsSet">
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
              </p>
              <p>HTML5</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
              </p>
              <p>CSS3</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=sass" alt="Sass" />
              </p>
              <p>Sass / SCSS</p>
            </div>
          </div>
          <div data-aos="slide-right" className="skillsSet">
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=js" alt="JS" />
              </p>
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=nodejs" alt="Node" />
              </p>
              <p>Node</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=npm" alt="npm" />
              </p>
              <p>npm</p>
            </div>
          </div>
          <div data-aos="slide-left" className="skillsSet">
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=vite" alt="Vite" />
              </p>
              <p>Vite</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=react" alt="React" />
              </p>
              <p>React</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=typescript" alt="TS" />
              </p>
              <p>TypeScript</p>
            </div>
          </div>
          <div data-aos="slide-right" className="skillsSet">
            <div className="skill">
              <p className="p_to_center">
                <img
                  src="https://skillicons.dev/icons?i=threejs"
                  alt="Three.js"
                />
              </p>
              <p>Three.js</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=svg" alt="SVG" />
              </p>
              <p>SVG</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img
                  src="https://skillicons.dev/icons?i=express"
                  alt="Express"
                />
              </p>
              <p>Express</p>
            </div>
          </div>
          <div data-aos="slide-left" className="skillsSet">
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=php" alt="PHP" />
              </p>
              <p>PHP</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />
              </p>
              <p>MySQL</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=sqlite" alt="SQLite" />
              </p>
              <p>SQLite</p>
            </div>
          </div>
          <div data-aos="slide-up" className="skillsSet">
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=aws" alt="AWS" />
              </p>
              <p>AWS</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=gcp" alt="GCP" />
              </p>
              <p>Google Cloud</p>
            </div>
            <div className="skill">
              <p className="p_to_center">
                <img src="https://skillicons.dev/icons?i=heroku" alt="Heroku" />
              </p>
              <p>Heroku</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
