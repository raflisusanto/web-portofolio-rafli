import logo from "../assets/images/rafli-logo-white.svg";
import emailLogo from "../assets/images/Email.svg";
import waLogo from "../assets/images/WA.svg";
import classes from "./BottomBar.module.css";

function BottomBar() {
  return (
    <div className={classes.bottomBarContainer}>
      <img className={classes.logo} src={logo} />
      <div className={classes.contactContainer}>
        <h4 className={classes.contactTitle}>Contact Me</h4>
        <div className={classes.rowContact}>
          <img className={classes.icons} src={waLogo} />
          <p className={classes.desc}>+62 857 4962 3626</p>
        </div>
        <div className={classes.rowContact}>
          <img className={classes.icons} src={emailLogo} />
          <p className={classes.desc}>
            raflisusanto@student.telkomuniversity.ac.id
          </p>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
