import "./App.css";
import { About } from "./components/About";
import { ExpTimeline } from "./components/ExpTimeline";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { SkillCloud } from "./components/SkillCloud";
import { Projects } from "./components/Projects";
import { Educ } from "./components/Educ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ToTopButton from "./components/ToTop";

function App() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <SkillCloud />
      <Projects />
      <ExpTimeline />
      <Educ />
      <Contact />
      <Footer />
      <ToTopButton />
    </main>
  );
}

export default App;
