import "./App.css";
import { About } from "./components/About";
import { ExpTimeline } from "./components/ExpTimeline";
import { Header } from "./components/Header";
import {TypewriterComponent} from "./components/Message";

function App() {
  return (
    <>
      <Header />
      <About />
      <TypewriterComponent />
      <ExpTimeline />
    </>
  );
}

export default App;
