import styles from "./style.module.scss";

function Component() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <small className={styles.rightcol}>
          <span className={styles.desktop}>This website is open-source.</span>
          <a
            href="https://github.com/Babailan/horizontal-scroll/tree/master/website"
            target={"_blank"}
            rel="noreferrer"
          >
            Help me make it better!
          </a>
        </small>
        <small className={styles.leftcol}>
          <b
            className={styles.desktop}
            onClick={() => window.scroll({ top: 0 })}
          >
            horizontal-scroll.vercel.app
          </b>
          &copy;{0x7e6 !== year ? `${0x7e6}-${year}` : 0x7e6}
        </small>
      </div>
    </footer>
  );
}

export default Component;
