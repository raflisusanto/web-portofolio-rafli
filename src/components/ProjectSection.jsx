import { useState } from "react";

import docIcon from "../assets/images/documents.svg";
import Dropdown from "./Dropdown";
import ProjectCard from "./ProjectCard";
import classes from "./ProjectSection.module.css";
import { projectData } from "../data/data";

function ProjectSection() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={classes.portoContainer}>
      <div className={classes.portoTitle}>
        <h4 className={classes.titleText}>Portfolio</h4>
        <img src={docIcon} className={classes.titleIcon} alt="Document Icon" />
      </div>
      <p className={classes.desc}>
        These are some of my notable projects showcasing my expertise in
        front-end development for both web and mobile platforms, proficiency in
        machine learning, and skills in graphic design including UI/UX Design.
      </p>
      <Dropdown setSelectedOption={setSelectedOption} />
      {selectedOption === "Graphic Design" && (
        <p className={classes.desc}>
          There are a lot more designs I've done in these past 4 years, please
          check this{" "}
          <a href="" className={classes.links}>
            GDrive
          </a>
          , or my{" "}
          <a href="" className={classes.links}>
            Dribbble
          </a>{" "}
          for more.
        </p>
      )}
      {selectedOption && (
        <div className={classes.projectCards}>
          {projectData[selectedOption]?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectSection;
