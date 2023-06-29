import portrait from "../assets/images/rafli-portrait.png";
import linkedin from "../assets/images/Linkedin.svg";
import github from "../assets/images/Github.svg";
import classes from "./HomeSection.module.css";
import TextSlider from "./TextSlider";

function HomeSection() {
  return (
    <div className={classes.sectionContainer}>
      <img className={classes.portrait} src={portrait} alt="Rafli's Portrait" />
      <h1 className={classes.titleName}>
        Hi, My name is Muhamad Rafli Susanto
      </h1>
      <TextSlider
        texts={[
          "and I'm a Front-end Developer",
          "and I'm a Machine Learning Engineer",
          "and I'm a Graphic Designer",
        ]}
      />
      <p className={classes.descName}>Nice to meet you!</p>
      <div className={classes.socials}>
        <a
          href="https://www.linkedin.com/in/raflisusanto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className={classes.logo} />
        </a>
        <a
          href="https://github.com/raflisusanto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className={classes.logo} />
        </a>
      </div>
    </div>
  );
}

export default HomeSection;
