import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import calcTransformX from "./calc";

interface horizontal {
  height: string | number;
  transform: number | string;
}

function Component() {
  // container.current first-child[0] --> sticky element
  const container = useRef<HTMLDivElement>(null);

  const [horizontal, setHorizontal] = useState<horizontal>({
    height: "fit-content",
    transform: 0,
  });

  // scroll Watcher
  const scrollEvent = () => {
    const sticky = container.current.childNodes[0] as HTMLElement;
    const offsetTop = container.current.offsetTop;

    const transform = calcTransformX(
      window.scrollY,
      offsetTop,
      offsetTop + container.current.clientHeight
    );
    setHorizontal((p) => {
      return {
        ...p,
        transform: transform,
      };
    });
  };
  // resize Watcher
  const resizeEvent = () => {};

  useEffect(() => {
    // initial height,offset,bottom of container
    const sticky = container.current.childNodes[0] as HTMLElement;
    setHorizontal((p) => {
      return {
        ...p,
        height: sticky.scrollWidth - window.innerHeight,
      };
    });

    window.addEventListener("scroll", scrollEvent);
    window.addEventListener("resize", resizeEvent);
    return () => {
      // unmount Component
      window.removeEventListener("scroll", scrollEvent);
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);
  return (
    <div
      ref={container}
      className={styles.container}
      style={{ height: horizontal.height }}
    >
      <div className={styles.sticky}>
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${horizontal.transform}px)` }}
        >
          <div className={styles.firstSection}></div>
          <div className={styles.secondSection}></div>
          <div className={styles.thirdSection}></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
