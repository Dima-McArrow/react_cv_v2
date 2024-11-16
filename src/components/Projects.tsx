import "./Projects.css";
import nexustools from "../../src/nexus_tools.png";
import katana from "../../src/katana.png";
import todo from "../../src/todo.png";
import sandrine from "../../src/sandrine.png";

export const Projects = () => {
  return (
    <section id="projects" className="section_projects">
      <article>
        <h2>
          projects<span className="brackets">()</span>
        </h2>
        <p className="projects_list_p">Here are some of my projects</p>
        <div className="card-container">
          <div className="card">
            <img src={nexustools} alt="Project Image" />
            <div className="card-content">
              <h2 className="card-title">Nexus Tools</h2>
              <p className="card-description">
                A tool to generate secure passwords with various options for
                length and complexity. An easy-to-use calculator for determining
                percentages in real time. Roman Numeral Converter
              </p>
              <div className="card-buttons">
                <a
                  href="https://dima-mcarrow.github.io/nexus-tools/"
                  target="_blank"
                >
                  Demo
                </a>
                <a href="#code" target="_blank">
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={katana} alt="Project Image" />
            <div className="card-content">
              <h2 className="card-title">Katana in a stone</h2>
              <p className="card-description">
                Try to pull out the katana from the stone. With a 1/2 chance.
              </p>
              <p className="card-description">
                A very simple 3D game made with Three.js
              </p>
              <div className="card-buttons">
                <a
                  href="https://dima-mcarrow.github.io/katana_in_stone/dist/index.html"
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/Dima-McArrow/katana_in_stone"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={todo} alt="Project Image" />
            <div className="card-content">
              <h2 className="card-title">ToDo App</h2>
              <p className="card-description">
                The classic ToDo app with the ability to add, delete, and mark
                as done tasks.
              </p>
              <p className="card-description">
                React front-end app with a PHP and MySQL back-end.
              </p>
              <div className="card-buttons">
                <a href="#code">Code</a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={sandrine} alt="Project Image" />
            <div className="card-content">
              <h2 className="card-title">Sandrine Coupart</h2>
              <p className="card-description">
                A tool to generate secure passwords with various options for
                length and complexity.
              </p>
              <div className="card-buttons">
                <a href="#code">Code</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
