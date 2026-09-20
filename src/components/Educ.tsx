import "./Educ.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

import content from "../content/education.json";
import studi from "../studi.png";
import mitro from "../mitro.png";
import isg from "../isg.png";

type School = {
  id: string;
  cardTitle: string;
  school: string;
  logo: string;
  date: string;
  country: string;
  description: string;
  website: string;
};

type EducationContent = {
  title: string;
  modalCta: string;
  modalClose: string;
  items: School[];
};

const { title, modalCta, modalClose, items } = content as EducationContent;

const logos: Record<string, string> = { studi, mitro, isg };

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Educ = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = items.find((item) => item.id === openId) ?? null;
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  // Escape closes the dialog, and Tab is kept inside it: without this the
  // focus ring walks off into the page behind the backdrop, where a keyboard
  // user cannot see where they are.
  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialog?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenId(null);
        return;
      }
      if (event.key !== "Tab" || !dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      // Wrap around at both ends instead of leaving the dialog
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus(); // back to the card that opened the dialog
    };
  }, [open]);

  return (
    <section id="education" className="section_education">
      <div className="educ_wrapper">
        <h2>
          {title}
          <span className="brackets">()</span>
        </h2>
        <div data-aos="fade-up" className="educ-cards_wrapper">
          {items.map((item) => (
            // A real button, so the cards are reachable by keyboard
            <button
              type="button"
              key={item.id}
              className="educ-card"
              onClick={() => setOpenId(item.id)}
            >
              <div className="educ_card_title">
                <h3>{item.cardTitle}</h3>
              </div>
              <div className={`educ_card_logo educ_card_logo--${item.id}`}>
                <img src={logos[item.logo]} alt={item.school} />
              </div>
              <div className="educ_card_date">
                <p>{item.date}</p>
              </div>
              <div className="educ_card_country">
                <span className="country">{item.country}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <>
          {/* Click-outside convenience; Escape and the Close button are the
              keyboard paths out, so this stays inert for assistive tech. */}
          <div
            className="educ-backdrop"
            aria-hidden="true"
            onClick={() => setOpenId(null)}
          ></div>
          <div
            className="educ-modal"
            role="dialog"
            aria-modal="true"
            aria-label={open.school}
            ref={dialogRef}
          >
            <div className="educ-modal_content">
              <div className="educ-modal_image">
                <img src={logos[open.logo]} alt={open.school} />
              </div>
              <h2 className="educ-modal_title">{open.school}</h2>
              <hr />
              <p className="educ-modal_description">{open.description}</p>
              <hr />
              <a href={open.website} target="_blank" rel="noreferrer">
                {modalCta}
              </a>
              <button
                type="button"
                className="educ-modal_close"
                onClick={() => setOpenId(null)}
              >
                {modalClose}
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
