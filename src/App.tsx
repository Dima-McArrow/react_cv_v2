import "./App.css";
import { About } from "./components/About";
import { ExpTimeline } from "./components/ExpTimeline";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Educ } from "./components/Educ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <ExpTimeline />
      <Educ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
