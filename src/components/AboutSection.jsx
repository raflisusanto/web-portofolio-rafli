import waveImage from "../assets/images/wave.png";
import htmlIcon from "../assets/images/html.svg";
import cssIcon from "../assets/images/css.svg";
import jsIcon from "../assets/images/js.svg";
import reactIcon from "../assets/images/react.svg";
import flutterIcon from "../assets/images/logos_flutter.svg";
import tfIcon from "../assets/images/tensorflow.svg";
import pythonIcon from "../assets/images/logos_python.svg";
import kotlinIcon from "../assets/images/kotlin.svg";
import decorImage from "../assets/images/decoration.png";
import classes from "./AboutSection.module.css";

function AboutSection() {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h4 className={classes.titleText}>About Me</h4>
          <img src={waveImage} className={classes.waveIcon} />
        </div>
        <p className={classes.desc}>
          Informatics fresh graduate skilled in Front-End Development, Mobile
          Development, and Machine Learning. With 3+ years of experience, I have
          crafted visually captivating designs for various platforms and built
          dynamic user interfaces for web and mobile applications. Additionally,
          I have practical experience in Machine Learning specifically in
          Computer Vision, working with libraries like TensorFlow and
          implementing models such as YOLO and MobileNet. Driven by a passion
          for learning new things and solving problems, I bring a unique and
          versatile skill set to the table. Ready to contribute to innovative
          projects, I am committed to staying on the cutting edge of technology
          and making a meaningful impact.
        </p>
        <div className={classes.techContainer}>
          <p className={classes.techTitle}>Tech Stack:</p>
          <img src={htmlIcon} className={classes.icons} />
          <img src={cssIcon} className={classes.icons} />
          <img src={jsIcon} className={classes.icons} />
          <img src={reactIcon} className={classes.icons} />
          <img src={flutterIcon} className={classes.icons} />
          <img src={kotlinIcon} className={classes.icons} />
          <img src={tfIcon} className={classes.icons} />
          <img src={pythonIcon} className={classes.icons} />
        </div>
      </div>
      <img src={decorImage} className={classes.decorImage} />
    </div>
  );
}

export default AboutSection;
