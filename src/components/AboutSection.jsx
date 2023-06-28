import waveImage from "../assets/images/wave.png";
import htmlIcon from "../assets/images/html.svg";
import cssIcon from "../assets/images/css.svg";
import jsIcon from "../assets/images/js.svg";
import reactIcon from "../assets/images/react.svg";
import flutterIcon from "../assets/images/logos_flutter.svg";
import tfIcon from "../assets/images/tensorflow.svg";
import pythonIcon from "../assets/images/logos_python.svg";
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
          I am a 6th-semester Informatics student specializing in Front-end
          Development, Machine Learning, and Graphic Design. For Front-end
          Development, I leverage React.js to create dynamic interfaces using a
          combination of HTML, CSS, and JavaScript. I also have experience in
          developing Mobile Applications using React Native and Flutter,
          allowing me to build versatile and user-friendly mobile experiences.
          In Machine Learning, I utilize TensorFlow to create models, analyze
          and preprocess data, and also experienced in implementing advanced
          models such as YOLO and MobileNet. In the realm of Graphic Design, I
          have a strong aptitude for crafting engaging visuals for various
          platforms, including social media, advertisements, posters, banners,
          and logos using tools like Adobe Illustrator and Figma. With this
          unique combination of skills, I offer a comprehensive approach to
          digital innovation.
        </p>
        <div className={classes.techContainer}>
          <p className={classes.techTitle}>Tech Stack:</p>
          <img src={htmlIcon} className={classes.icons} />
          <img src={cssIcon} className={classes.icons} />
          <img src={jsIcon} className={classes.icons} />
          <img src={reactIcon} className={classes.icons} />
          <img src={flutterIcon} className={classes.icons} />
          <img src={tfIcon} className={classes.icons} />
          <img src={pythonIcon} className={classes.icons} />
        </div>
      </div>
      <img src={decorImage} className={classes.decorImage} />
    </div>
  );
}

export default AboutSection;
