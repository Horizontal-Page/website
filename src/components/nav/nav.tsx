import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./style.module.scss";
import Router from "next/router";

function Nav({ title }) {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftcol}>
          <span
            className={styles.title}
            onClick={() => Router.push("/")}
            title={title ? "GO BACK" : ""}
          >
            HP
          </span>
        </div>
        <div className={styles.rightcol}>
          <a
            href="https://github.com/Horizontal-Page"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.githubIcon}
              size="2x"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
