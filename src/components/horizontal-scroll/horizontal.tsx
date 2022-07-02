import styles from "./style.module.scss";
import HorizontalPage from "react-horizontal-page";
import Image from "next/image";

import Router from "next/router";

function Component() {
  return (
    <>
      <HorizontalPage
        multiplier={0.7}
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
        }}
        lerp={1}
      >
        <h1 className={`${styles.h1} stroke`}>HORIZONTAL SCROLLING!</h1>
        <div style={{ position: "relative" }} className={styles.containerImage}>
          <Image
            src={"/saitama.jpg"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"saitama"}
            loading={"eager"}
          />
        </div>
        <div className={styles.whatisThis}>
          <h1 className={styles.thanks}>THANK YOU FOR YOUR TIME!</h1>
        </div>
      </HorizontalPage>
      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <p onClick={() => Router.push("/")}>Go back</p>
        </div>
      </div>
    </>
  );
}

export default Component;
