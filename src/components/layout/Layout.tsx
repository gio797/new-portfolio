import Header from "../header/Header";
import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/Contact";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default Layout;
