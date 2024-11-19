import "./ExpTimeline.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ExpTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <section id="experience" className="section_experience">
      <h2 className="experience_section_title">
        experience<span className="brackets">()</span>
      </h2>
      <div className="timeline">
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>03 / 2023</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>Present</span>
              </div>
            </div>
            <h3>Web Developer</h3>
            <p className="exp_country">Courbevoie, France</p>
            <h5>Personal projects</h5>
            <p>
              Working on creating interactive, user-friendly web applications.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>07 / 2018</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>12 / 2022</span>
              </div>
            </div>
            <h3>Hotel receptionist</h3>
            <p className="exp_country">Gennevillers, France</p>
            <h5>Executive Hotel</h5>
            <p>
              Provision of elegant and professional service in an establishment
              with 82 rooms and suites. Manage check-ins, key handovers, and
              reservations. Oversee check-outs, process payments for rooms,
              meals, and drinks, and handle telephone inquiries. Advise clients
              on restaurants, museums, and activities. Deliver personalized,
              high-end hospitality while completing various administrative
              tasks.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>02 / 2018</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>05 / 2018</span>
              </div>
            </div>
            <h3>Assistant production</h3>
            <p className="exp_country">Paris, France</p>
            <h5>Ezra Productions</h5>
            <p>Film "Edmond"</p>
          </div>
        </div>
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>11 / 2017</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>01 / 2018</span>
              </div>
            </div>
            <h3>Assistant production</h3>
            <p className="exp_country">Paris, France</p>
            <h5>Eaux Vives Productions</h5>
            <p>Film "Soumission"</p>
          </div>
        </div>
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>09 / 2017</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>01 / 2018</span>
              </div>
            </div>
            <h3>Assistant production</h3>
            <p className="exp_country">Paris, France</p>
            <h5>Fechner Films</h5>
            <p>Film "Facteur Cheval"</p>
          </div>
        </div>
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>05 / 2015</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>11 / 2015</span>
              </div>
            </div>
            <h3>Executive Producer</h3>
            <p className="exp_country">Moscow, Russia</p>
            <h5>Studio GRAD</h5>
            <p>
              Project management in 3D graphics (CGI) for TV commercials and
              documentary production. Supervision of post-production:
              management, coordination, and scheduling. Client interaction to
              ensure project delivery aligns with specific requirements,
              addressing feedback, and integrating it into production. Task
              definition for studio supervisors and staff. Coordination between
              production stakeholders (studio employees, supervisors, directors,
              advertising agencies, etc.). Preparation of documents like
              storyboards, schedules, lists, and presentations. Organization of
              presentations, maintenance of necessary conditions for production
              processes, and outreach to international clients.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>06 / 2012</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>04 / 2015</span>
              </div>
            </div>
            <h3>Producer Assistant</h3>
            <p className="exp_country">Moscow, Russia</p>
            <h5>Ball-Park Production House</h5>
            <p>
              Complete management of shoots: logistics, scheduling, contracts,
              and post-production. Preparation for shoots, administration, and
              oversight of post-production processes. Planning and coordination
              of travel, itineraries, accommodations, and meetings for the team.
              Creation of documents and progress reports for producers, as well
              as cost research for production estimates and tenders.
              Coordination of production elements (directors, casting, wardrobe,
              props, staff, etc.) across pre-production, production, and
              post-production. Preparation of presentations and organization of
              resources needed for editing or sound design sessions.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>12 / 2010</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>06 / 2012</span>
              </div>
            </div>
            <h3>First Assistant Director</h3>
            <p className="exp_country">Moscow, Russia</p>
            <h5>Studio "Galacon"</h5>
            <p>
              Production of documentary films for the Russian federal TV's
              "Channel One" and advertising videos. Experience in filming,
              setting up video, lighting, and sound equipment, operating
              cameras, and working with archives and story subjects. Skilled in
              video editing (Final Cut, Avid), director assistance, and
              administrative tasks.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="timeline-item">
          <div className="circle"></div>
          <div className="content">
            <div className="banner">
              <div className="date left">
                <span>05 / 2005</span>
              </div>
              <div className="connector"></div>
              <div className="date right">
                <span>11 / 2010</span>
              </div>
            </div>
            <h3>Marketing Manager</h3>
            <p className="exp_country">Moscow, Russia</p>
            <h5>Geodis RUS</h5>
            <p>
              Development and management of marketing and advertising (ads,
              articles, and press releases for specialized media, printed
              materials, participation in international exhibitions with a
              stand, presentations, direct contact with representatives of
              various companies). Prospecting for new clients (email, cold
              calling, presentations, participation in major international
              exhibitions).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
