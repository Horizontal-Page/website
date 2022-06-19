import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ClipBoard from "../clipboard";
import styles from "./style.module.scss";

function Component() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.leftcol}>
            <span className={styles.title}>HS</span>
          </div>
          <div className={styles.rightcol}>
            <a
              href="https://github.com/Babailan/horizontal-scroll"
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
      <div className={styles.content}>
        <div className={styles.leftcol}>
          <h1>HORIZONTAL SCROLLING LIBRARY</h1>
          <span className={styles.subject}>
            {`Horizontal scroll (水平滚动) is a open source javascript library it will help you to achieve you desire horizontal scrolling.`}
            <a
              href="https://github.com/Babailan/horizontal-scroll"
              rel="noreferrer"
              target={"_blank"}
            >
              Help me make it better!
            </a>
          </span>
        </div>
        <div className={styles.rightcol}>
          <h3 className={styles.installHeader}>Install</h3>
          <ClipBoard text={"npm install Lorem-Ipsum"} />
          <ClipBoard
            text={"yarn add --dev Lorem-Ipsum"}
            style={{ marginTop: "10px" }}
          />
          <span className={styles.availableWrapper}>
            <span className={styles.first}>{`Availabel wrapper(3)`}</span>
            <br />
            <span className={styles.last}>VannilaJS, NodeJS, ReactJS.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Component;
