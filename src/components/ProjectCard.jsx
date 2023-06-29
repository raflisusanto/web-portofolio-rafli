import githubLogo from "../assets/images/github_circle.svg";
import previewLogo from "../assets/images/preview.svg";
import downloadLogo from "../assets/images/download.svg";
import colabLogo from "../assets/images/colab.svg";
import figmaLogo from "../assets/images/figma.svg";
import mediumLogo from "../assets/images/medium.svg";
import classes from "./ProjectCard.module.css";

function ProjectCard({
  img,
  title,
  desc,
  techStack,
  github,
  githubLink,
  preview,
  previewLink,
  apk,
  apkLink,
  colab,
  colabLink,
  figma,
  figmaLink,
  medium,
  mediumLink,
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
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              <div className={classes.button}>
                <img src={githubLogo} className={classes.logo} />
                <p className={classes.item}>Code</p>
              </div>
            </a>
          )}
          {preview && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              <div className={classes.button}>
                <img src={previewLogo} className={classes.logo} />
                <p className={classes.item}>Preview</p>
              </div>
            </a>
          )}
          {apk && (
            <a
              href={apkLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              <div className={classes.button}>
                <img src={downloadLogo} className={classes.logo} />
                <p className={classes.item}>.apk</p>
              </div>
            </a>
          )}
          {colab && (
            <a
              href={colabLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              <div className={classes.button}>
                <img src={colabLogo} className={classes.logo} />
                <p className={classes.item}>Colab</p>
              </div>
            </a>
          )}
          {figma && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              <div className={classes.button}>
                <img src={figmaLogo} className={classes.logo} />
                <p className={classes.item}>Figma</p>
              </div>
            </a>
          )}
          {medium && (
            <a
              href={mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              <div className={classes.button}>
                <img src={mediumLogo} className={classes.logo} />
                <p className={classes.item}>Medium</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
