import Typewriter from "typewriter-effect";
import "./Message.css";

export const TypewriterComponent = () => {
  return (
    <div className="typewriterText_div">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(70)
            .pauseFor(2200)
            .typeString(
              '<code>const <span class="whoAmI">whoAmI</span> = {<span class="dm_const">Dima Makarov</span>};</code>'
            )
            .pauseFor(1500)
            .callFunction(() => {
              // Manually clear content instantly
              const typewriterContainer = document.querySelector(
                ".Typewriter__wrapper"
              );
              if (typewriterContainer) {
                typewriterContainer.innerHTML = ""; // Clear text instantly
              }
            })
            .typeString(
              '<code>console.<span class="console_log">log</span>(<span class="whoAmI">whoAmI</span>);</code>'
            )
            .pauseFor(1000)
            .callFunction(() => {
              // Manually clear content instantly
              const typewriterContainer = document.querySelector(
                ".Typewriter__wrapper"
              );
              if (typewriterContainer) {
                typewriterContainer.innerHTML = ""; // Clear text instantly
              }
            })
            .pauseFor(250)
            .pasteString(
              `
                <br />Throughout my career, I have successfully combined creativity,
                technology, and service. With experience in marketing and
                audiovisual production, I have learned to tell stories and
                manage projects. Today, I am returning to my first passion:
                technology. By training in web development, I aim to blend
                creativity and my passion for IT to create accessible and
                engaging digital experiences. My journey, which has taken me
                from business to cinema and now to web development, reflects my
                commitment to creativity, service, and lifelong learning.
                `,
              null
            )
            .pauseFor(2500)
            .stop()
            .start();
        }}
      />
    </div>
  );
};
