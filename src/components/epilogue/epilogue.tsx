import styles from "./style.module.scss";

function Component() {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/horizontal-scroll"
        target={"_blank"}
        rel="noreferrer"
      >
        GITHUB
        <br />
        ORGANIZATION
      </a>
    </div>
  );
}

export default Component;
