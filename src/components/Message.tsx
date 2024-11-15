import Typewriter from 'typewriter-effect';

export const TypewriterComponent = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(70)
            .typeString('<code>print(<strong>whoami</strong>)</code>')
            .pauseFor(250)
            .typeString(`
                <br />Throughout my career, I have successfully combined creativity,
                technology, and service. With experience in marketing and
                audiovisual production, I have learned to tell stories and
                manage projects. Today, I am returning to my first passion:
                technology. By training in web development, I aim to blend
                creativity and my passion for IT to create accessible and
                engaging digital experiences. My journey, which has taken me
                from business to cinema and now to web development, reflects my
                commitment to creativity, service, and lifelong learning.
                `)
            .pauseFor(2500)
            .typeString('<br /><strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
            .stop()
            .start();
        }}
      />
    </div>
  );
};


