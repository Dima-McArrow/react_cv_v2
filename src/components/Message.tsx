import Typewriter from "typewriter-effect";
import "./Message.css";

import content from "../content/about.json";

const { typewriter, summary } = content;

// typewriter-effect takes raw HTML strings, so the escaping has to be done here.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const clearWrapper = () => {
  const typewriterContainer = document.querySelector(".Typewriter__wrapper");
  if (typewriterContainer) {
    typewriterContainer.innerHTML = ""; // Clear text instantly
  }
};

export const TypewriterComponent = () => {
  return (
    <div className="typewriterText_div">
      <Typewriter
        onInit={(instance) => {
          instance
            .changeDelay(70)
            .pauseFor(2200)
            .typeString(
              `<code>const <span class="whoAmI">${escapeHtml(
                typewriter.constName,
              )}</span> = {<span class="dm_const">${escapeHtml(
                typewriter.value,
              )}</span>};</code>`,
            )
            .pauseFor(1500)
            .callFunction(clearWrapper)
            .typeString(
              `<code>console.<span class="console_log">log</span>(<span class="whoAmI">${escapeHtml(
                typewriter.constName,
              )}</span>);</code>`,
            )
            .pauseFor(1000)
            .callFunction(clearWrapper)
            .pauseFor(250)
            .pasteString(`<br />${escapeHtml(summary)}`, null)
            .pauseFor(2500)
            .stop()
            .start();
        }}
      />
    </div>
  );
};
