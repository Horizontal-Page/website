import styles from "./style.module.scss";
import HorizontalPage from "react-horizontal-page";
import Image from "next/image";
import lol from "../../assets/lol.jpg";
import Router from "next/router";

function Component() {
  return (
    <HorizontalPage lerp={0.3} multiplier={0.5}>
      <h1 className={styles.h1}>HORIZONTAL SCROLLING!</h1>
      <div style={{ position: "relative" }} className={styles.containerImage}>
        <Image
          src={lol}
          layout={"fill"}
          objectFit={"contain"}
          alt={"saitama"}
        />
      </div>
      <div className={styles.lastWord} onClick={() => Router.push("/")}>
        <h1>
          GO BACK TO <br />
          HOMEPAGE
        </h1>
      </div>
    </HorizontalPage>
  );
}

export default Component;
