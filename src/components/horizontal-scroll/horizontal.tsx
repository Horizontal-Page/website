import styles from "./style.module.scss";
import HorizontalPage from "react-horizontal-page";
import Image from "next/image";
import lol from "../../assets/lol.jpg";
import { LegacyRef, useEffect, useRef } from "react";
import Nav from "../nav";

function Component() {
  const ref: LegacyRef<HTMLHeadingElement> = useRef();
  useEffect(() => {
    const lol = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        console.log(entry);
      });
    });
    if (ref.current) {
      lol.observe(ref.current);
    }
  }, []);
  return (
    <>
      <HorizontalPage
        multiplier={1.5}
        style={{
          display: "flex",
          alignItems: "center",
        }}
        lerp={1}
      >
        <h1 className={`${styles.h1} stroke`}>HORIZONTAL SCROLLING!</h1>
        <div style={{ position: "relative" }} className={styles.containerImage}>
          <Image
            src={lol}
            layout={"fill"}
            objectFit={"contain"}
            alt={"saitama"}
          />
        </div>
      </HorizontalPage>
      <Nav title={true} />
    </>
  );
}

export default Component;
