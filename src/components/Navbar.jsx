import classes from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  function handleLinkClick(section, event) {
    event.preventDefault();
    setActiveSection(section);
    const targetElement = document.getElementById(section);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={classes.navbar}>
      <a
        href="#home"
        onClick={(event) => handleLinkClick("home", event)}
        className={activeSection === "home" ? classes.active : ""}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={(event) => handleLinkClick("about", event)}
        className={activeSection === "about" ? classes.active : ""}
      >
        About Me
      </a>
      <a
        href="#projects"
        onClick={(event) => handleLinkClick("projects", event)}
        className={activeSection === "projects" ? classes.active : ""}
      >
        Projects
      </a>
      <a
        href="#contacts"
        onClick={(event) => handleLinkClick("contacts", event)}
        className={activeSection === "contacts" ? classes.active : ""}
      >
        Contacts
      </a>
    </nav>
  );
}

export default Navbar;
