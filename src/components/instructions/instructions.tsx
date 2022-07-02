import styles from "./style.module.scss";

function Instructions() {
  return (
    <div className={styles.container}>
      <h2>Available Wrapper</h2>
      <div className={styles.wrapperContainer}>
        <a
          href={"https://www.npmjs.com/package/react-horizontal-page"}
          target={"_blank"}
          className={styles.reactjs}
          rel={"noreferrer"}
        >
          ReactJS
        </a>
      </div>
      <h2 style={{ marginTop: "2em" }}>UnderDevelopment</h2>
      <div className={styles.wrapperContainer}>
        <a className={styles.vannilajs} rel={"noreferrer"}>
          VanillaJS
        </a>
        <a className={styles.nodejs} rel={"noreferrer"}>
          NodeJS
        </a>
      </div>
    </div>
  );
}

export default Instructions;
