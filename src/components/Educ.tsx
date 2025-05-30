import "./Educ.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import studi from "../../src/studi.png";
import mitro from "../../src/mitro.png";
import isg from "../../src/isg.png";

export const Educ = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  const handleStudiClick = () => {
    const studiContainer = document.querySelector(".studi");

    // Check if a modal is already open
    if (studiContainer?.querySelector(".studi-modal")) return;

    if (studiContainer) {
      // Create the backdrop element
      const studiBackdrop = document.createElement("div");
      studiBackdrop.classList.add("studi-backdrop");

      // Create the modal element
      const studiModal = document.createElement("div");
      studiModal.classList.add("studi-modal");
      studiModal.innerHTML = `
        <div class="studi-modal_content">
          <div class="studi-modal_image">
            <img src="/studi.png" alt="Studi" />
          </div>
          <h2 class="studi-modal_title">Studi</h2>
          <hr />
          <p class="studi-modal_description">Professional title (TP) level 5,
Web and mobile web developer</p>
          <hr />
          <a href="https://studi.fr/" target="_blank" noopener>Visit school Website</a>
          <button class="studi-modal_close">Close</button>
        </div>
      `;

      // Append the backdrop and modal to the container
      document.body.appendChild(studiBackdrop);
      document.body.appendChild(studiModal);

      // Handle close button click
      const studiModalCloseButton =
        studiModal.querySelector(".studi-modal_close");
      if (studiModalCloseButton) {
        studiModalCloseButton.addEventListener("click", () => {
          document.body.removeChild(studiModal);
          document.body.removeChild(studiBackdrop);
        });
      }

      // Close modal when clicking outside the content area
      studiBackdrop.addEventListener("click", () => {
        document.body.removeChild(studiModal);
        document.body.removeChild(studiBackdrop);
      });
    }
  };

  const handleMitroClick = () => {
    const mitroContainer = document.querySelector(".mitro");

    // Check if a modal is already open
    if (mitroContainer?.querySelector(".mitro-modal")) return;

    if (mitroContainer) {
      // Create the backdrop element
      const mitroBackdrop = document.createElement("div");
      mitroBackdrop.classList.add("mitro-backdrop");

      // Create the modal element
      const mitroModal = document.createElement("div");
      mitroModal.classList.add("mitro-modal");
      mitroModal.innerHTML = `
        <div class="mitro-modal_content">
          <div class="mitro-modal_image">
            <img src="/mitro.png" alt="Moscow Institute of Television and Radio Broadcasting "Ostankino"
            (MITRO)" />
          </div>
          <h2 class="isg-modal_title">Moscow Institute of Television and Radio Broadcasting "Ostankino"
            (MITRO)</h2>
          <hr />
          <p class="isg-modal_description">Higher National Diploma, Film/Video and Photographic Arts</p>
          <hr />
          <a href="https://www.mitro-tv.ru/tv-school/" target="_blank" noopener>Visit school Website</a>
          <button class="mitro-modal_close">Close</button>
        </div>
      `;

      // Append the backdrop and modal to the container
      document.body.appendChild(mitroBackdrop);
      document.body.appendChild(mitroModal);

      // Handle close button click
      const mitroModalCloseButton =
        mitroModal.querySelector(".mitro-modal_close");
      if (mitroModalCloseButton) {
        mitroModalCloseButton.addEventListener("click", () => {
          document.body.removeChild(mitroModal);
          document.body.removeChild(mitroBackdrop);
        });
      }

      // Close modal when clicking outside the content area
      mitroBackdrop.addEventListener("click", () => {
        document.body.removeChild(mitroModal);
        document.body.removeChild(mitroBackdrop);
      });
    }
  };

  const handleIsgClick = () => {
    const isgContainer = document.querySelector(".isg");

    // Check if a modal is already open
    if (isgContainer?.querySelector(".isg-modal")) return;

    if (isgContainer) {
      // Create the backdrop element
      const isgBackdrop = document.createElement("div");
      isgBackdrop.classList.add("isg-backdrop");

      // Create the modal element
      const isgModal = document.createElement("div");
      isgModal.classList.add("isg-modal");
      isgModal.innerHTML = `
        <div class="isg-modal_content">
          <div class="isg-modal_image">
            <img src="/isg.png" alt="ISG Institut Supérieur de Gestion" />
          </div>
          <h2 class="mitro-modal_title">ISG Institut Supérieur de Gestion</h2>
          <hr />
          <p class="mitro-modal_description">Bachelor of Business Administration
(BBA), Marketing</p>
          <hr />
          <a href="https://www.isg.fr/" target="_blank" noopener>Visit school Website</a>
          <button class="isg-modal_close">Close</button>
        </div>
      `;

      // Append the backdrop and modal to the container
      document.body.appendChild(isgBackdrop);
      document.body.appendChild(isgModal);

      // Handle close button click
      const isgModalCloseButton = isgModal.querySelector(".isg-modal_close");
      if (isgModalCloseButton) {
        isgModalCloseButton.addEventListener("click", () => {
          document.body.removeChild(isgModal);
          document.body.removeChild(isgBackdrop);
        });
      }

      // Close modal when clicking outside the content area
      isgBackdrop.addEventListener("click", () => {
        document.body.removeChild(isgModal);
        document.body.removeChild(isgBackdrop);
      });
    }
  };

  return (
    <section id="education" className="section_education">
      <div className="educ_wrapper">
        <h2>
          education<span className="brackets">()</span>
        </h2>
        <div data-aos="fade-up" className="educ-cards_wrapper">
          <div className="educ-card studi" onClick={handleStudiClick}>
            <div className="educ_card_title">
              <h3>
                Professional title (TP) level 5, Web and mobile web developer
              </h3>
            </div>
            <div className="educ_card_logo">
              <img src={studi} alt="Studi" />
            </div>
            <div className="educ_card_date">
              <p>03/2023 - 06/2024</p>
            </div>
            <br />
            <div className="educ_card_country">
              <p>
                <span className="country">France</span>
              </p>
            </div>
          </div>
          <div className="educ-card mitro" onClick={handleMitroClick}>
            <div className="educ_card_title">
              <h3>Higher National Diploma, Film/Video and Photographic Arts</h3>
            </div>
            <div className="educ_card_logo">
              <img src={mitro} alt="MITRO" />
            </div>
            <div className="educ_card_date">
              <p>09/2007 - 05/2010</p>
            </div>
            <br />
            <div className="educ_card_country">
              <span className="country">Russia</span>
            </div>
          </div>
          <div className="educ-card isg" onClick={handleIsgClick}>
            <div className="educ_card_title">
              <h3>Bachelor of Business Administration (BBA), Marketing</h3>
            </div>
            <div className="educ_card_logo_isg">
              <img src={isg} alt="ISG" />
            </div>
            <div className="educ_card_date">
              <p>05/2000 - 06/2003</p>
            </div>
            <br />
            <div className="educ_card_country">
              <span className="country">France</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
