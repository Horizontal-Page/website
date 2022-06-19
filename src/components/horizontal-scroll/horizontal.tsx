import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import calcTransformX from "./calc";
import Image from "next/image";
import lol from "../../assets/lol.jpg";

interface horizontal {
  height: string | number;
  transform: number;
}

function Component() {
  // container.current first-child[0] --> sticky element
  const container = useRef<HTMLDivElement>(null);

  // window size
  const [windowSize, setWindowSize] = useState(() => {
    let ob = { innerWidth: 0, innerHeight: 0 };
    if (typeof window !== "undefined") {
      ob.innerWidth = window.innerWidth;
      ob.innerHeight = window.innerHeight;
    }
    return ob;
  });

  // horizontal scrolling container
  const [hs, setHs] = useState<horizontal>({
    transform: 0,
    height: "fit-content",
  });

  // useEffect
  useEffect(() => {
    // event callbacks
    const scrollEvent = () => {
      const offsetTop = container.current.offsetTop;
      const wrapper = container.current.childNodes[0]
        .childNodes[0] as HTMLElement;

      const transform = calcTransformX({
        top: offsetTop,
        bottom:
          offsetTop + (container.current.scrollHeight - windowSize.innerHeight),
        maxtransform: windowSize.innerWidth - wrapper.scrollWidth,
      });

      setHs((p) => {
        return {
          ...p,
          transform: transform,
        };
      });
    };
    const resizeEvent = () => {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });

      const offsetTop = container.current.offsetTop;
      const wrapper = container.current.childNodes[0]
        .childNodes[0] as HTMLElement;

      const transform = calcTransformX({
        top: offsetTop,
        bottom:
          offsetTop + (container.current.scrollHeight - windowSize.innerHeight),
        maxtransform: windowSize.innerWidth - wrapper.scrollWidth,
      });

      setHs((p) => {
        return {
          ...p,
          transform: transform,
        };
      });
    };
    const wrapper = container.current.childNodes[0]
      .childNodes[0] as HTMLElement;

    setHs((p) => {
      return {
        ...p,
        height: wrapper.clientWidth,
      };
    });

    window.addEventListener("scroll", scrollEvent);
    window.addEventListener("resize", resizeEvent);

    return () => {
      // unmount Component
      window.removeEventListener("scroll", scrollEvent);
      window.removeEventListener("resize", resizeEvent);
    };
  }, [windowSize]);

  return (
    <div
      ref={container}
      className={styles.container}
      style={{ height: hs.height }}
    >
      <div className={styles.sticky}>
        {/* wrapper element */}
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${hs.transform}px)` }}
        >
          <div className={styles.firstSection}>
            <div className={styles.content}>
              <h1>HORIZONTAL SCROLLING!</h1>
            </div>
          </div>
          <div className={styles.secondSection}>
            <div className={styles.content}>
              <Image
                src={lol}
                layout={"fill"}
                objectFit={"contain"}
                alt={"saitama"}
              />
            </div>
          </div>
          {/* extra scrolling */}
          <div style={{ width: "50vw" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
