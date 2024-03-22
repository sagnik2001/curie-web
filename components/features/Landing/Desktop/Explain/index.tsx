import useOnScreen from "@hooks/useOnScreen";
import * as styles from "./Explain.module.scss";
import Ornament1 from "@svgs/explain-desktop/ornament1.svg";
import Ornament2 from "@svgs/explain-desktop/ornament2.svg";
import Ornament3 from "@svgs/explain-desktop/ornament3.svg";
import { useRef } from "react";
import clsx from "clsx";

export default function Explain() {
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen({
    ref,
    threshold: 0.75,
    dontUpdateAfterIntersection: true,
  });
  return (
    <div className={styles.box} ref={ref}>
      <div className={styles.container}>
        <img
          src="/explain-desktop.png"
          alt=""
          className={clsx(styles.bg, isOnScreen && styles.finalBg)}
        />
        <Ornament1
          className={clsx(
            styles.ornament1,
            isOnScreen && styles.finalOrnament1
          )}
        />
        <Ornament3
          className={clsx(
            styles.ornament3,
            isOnScreen && styles.finalOrnament3
          )}
        />
        <Ornament2
          className={clsx(
            styles.ornament2,
            isOnScreen && styles.finalOrnament2
          )}
        />
        <h2 className={clsx(styles.title, isOnScreen && styles.finalTitle)}>
          <span>High yield</span>
          <span>savings account</span>
        </h2>
        <ul className={clsx(styles.para, isOnScreen && styles.finalPara)}>
          <li>No hidden fees</li>
          <li>Enjoy higher returns</li>
        </ul>
        <img
          src="/explain-img-desktop.png"
          alt=""
          className={clsx(styles.img, isOnScreen && styles.finalImg)}
        />
      </div>
    </div>
  );
}
