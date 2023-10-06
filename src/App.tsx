import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
