import Navbar from "./components/navbar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";
import Education from "./components/Education/education";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Education />
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
