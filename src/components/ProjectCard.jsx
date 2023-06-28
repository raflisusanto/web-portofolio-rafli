import githubLogo from "../assets/images/github_circle.svg";
import previewLogo from "../assets/images/preview.svg";
import downloadLogo from "../assets/images/download.svg";
import colabLogo from "../assets/images/colab.svg";
import classes from "./ProjectCard.module.css";

function ProjectCard({
  img,
  title,
  desc,
  techStack,
  github,
  preview,
  apk,
  colab,
}) {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.thumbnailContainer}>
        <img src={img} className={classes.thumbnail} />
      </div>
      <div className={classes.content}>
        <h2 className={classes.titleName}>{title}</h2>
        <p className={classes.desc}>{desc}</p>
        <div className={classes.techStack}>
          <p className={classes.desc}>Tech Stack: </p>
          <p className={classes.item}>{techStack}</p>
        </div>
        <div className={classes.buttons}>
          {github && (
            <div className={classes.button}>
              <img src={githubLogo} className={classes.logo} />
              <p className={classes.item}>Code</p>
            </div>
          )}
          {preview && (
            <div className={classes.button}>
              <img src={previewLogo} className={classes.logo} />
              <p className={classes.item}>Preview</p>
            </div>
          )}
          {apk && (
            <div className={classes.button}>
              <img src={downloadLogo} className={classes.logo} />
              <p className={classes.item}>.apk</p>
            </div>
          )}
          {colab && (
            <div className={classes.button}>
              <img src={colabLogo} className={classes.logo} />
              <p className={classes.item}>Colab</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
