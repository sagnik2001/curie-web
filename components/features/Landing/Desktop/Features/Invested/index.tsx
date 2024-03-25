import Ornament1 from "@svgs/invested-desktop/ornament1.svg";
import Ornament2 from "@svgs/invested-desktop/ornament2.svg";
import Ornament3 from "@svgs/invested-desktop/ornament3.svg";
import Ornament4 from "@svgs/invested-desktop/ornament4.svg";
import * as styles from "./Invested.module.scss";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "@hooks/useOnScreen";
import clsx from "clsx";

export default function Invested() {
  const ref = useRef<HTMLDivElement>(null);
  const [floatOrnaments, setFloatOrnamanents] = useState(false);
  const isOnScreen = useOnScreen({
    ref,
    threshold: 0.35,
    dontUpdateAfterIntersection: true,
  });
  useEffect(() => {
    if (!isOnScreen || floatOrnaments) return;
    setTimeout(() => {
      setFloatOrnamanents(true);
    }, 800);
  }, [isOnScreen, floatOrnaments]);
  return (
    <div className={styles.box} ref={ref}>
      <Ornament1
        className={clsx(
          styles.ornament1,
          isOnScreen && styles.finalOrnament1,
          floatOrnaments && styles.float
        )}
      />
      <div className={styles.container}>
        <Ornament2
          className={clsx(
            styles.ornament2,
            isOnScreen && styles.finalOrnament2,
            floatOrnaments && styles.float
          )}
        />
        <Ornament3
          className={clsx(
            styles.ornament3,
            isOnScreen && styles.finalOrnament3,
            floatOrnaments && styles.float
          )}
        />
        <Ornament4
          className={clsx(
            styles.ornament4,
            isOnScreen && styles.finalOrnament4,
            floatOrnaments && styles.float
          )}
        />
        <img
          src="/desktop/bg-invested.png"
          alt=""
          className={clsx(styles.bg, isOnScreen && styles.finalBg)}
        />
        <h2 className={clsx(styles.title, isOnScreen && styles.finalTitle)}>
          <span>Stay invested</span>
          <span>all the time</span>
        </h2>
        <p
          className={clsx(
            styles.description,
            isOnScreen && styles.finalDescription
          )}
        >
          with the convenience of bank
        </p>
      </div>
      <img
        src="/desktop/img-invested.png"
        alt=""
        className={clsx(
          styles.img,
          isOnScreen && styles.finalImg,
          floatOrnaments && styles.float
        )}
      />
    </div>
  );
}
