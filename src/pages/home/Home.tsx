import "./home.css";
import { BiSolidFileCss, BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { PiFileHtmlFill } from "react-icons/pi";

function Home() {
  return (
    <div className="home">
      <h1 className="glitch">
        <span aria-hidden="true">frontend developer</span>
        frontend developer
        <span aria-hidden="true">frontend developer</span>
      </h1>
      <div className="info">
        <h2>My name is Giorgi Muchaidze</h2>
        <p>I am a frontend developer based in Tbilisi, Georgia.</p>
        <h3>My skills:</h3>
        <div className="skills">
          <PiFileHtmlFill size={50} color="#ef6525" />
          <BiSolidFileCss size={50} color="#299cf8" />
          <BiLogoJavascript size={50} color="#f7e025" />
          <SiTypescript size={50} color="#299cf8" />{" "}
          <FaReact size={50} color="#299cf8" />
        </div>
      </div>
    </div>
  );
}

export default Home;
