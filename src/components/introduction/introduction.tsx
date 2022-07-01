import styles from "./style.module.scss";
import Router from "next/router";

function Component() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftcol}>
          <h1>HORIZONTAL PAGE LIBRARY</h1>
          <span className={styles.subject}>
            {`Horizonal page (横页) is an open-source javascript library it will help you to achieve your desire horizontal scrolling. Help me make it better!`}
            <a
              href="https://github.com/horizontal-page"
              rel="noreferrer"
              target={"_blank"}
            >
              Help me make it better!
            </a>
          </span>
        </div>
        <div className={styles.rightcol}>
          <div
            className={styles.viewButton}
            onClick={() => Router.push("/example")}
          >
            View Example
          </div>
          <span className={styles.availableWrapper}>
            <span>{`Availabel wrapper(2)`}</span>
            <br />
            <span style={{ fontWeight: "900" }}>VannilaJS, ReactJS.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Component;
