import { faCopy, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";
import styles from "./style.module.scss";

type props = {
  text: string | number;
  className?: string;
  style?: CSSProperties;
};

function Component({ text, className, style }: props) {
  const copy = (e: any) => {
    navigator.clipboard.writeText(e.target.innerText);
  };
  return (
    <span
      className={`${styles.container} ${className ? className : ""}`}
      style={style ? style : {}}
      title={"Copy Clip Board"}
      onClick={copy}
    >
      <span>
        <FontAwesomeIcon size="xs" icon={faChevronRight} />
        {text}
      </span>
      <FontAwesomeIcon icon={faCopy} />
    </span>
  );
}

export default Component;
