import useOnScreen from "@hooks/useOnScreen";
import * as styles from "./Explain.module.scss";
import Ornament1 from "@svgs/explain-desktop/ornament1.svg";
import Ornament2 from "@svgs/explain-desktop/ornament2.svg";
import Ornament3 from "@svgs/explain-desktop/ornament3.svg";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Explain() {
  const ref = useRef<HTMLDivElement>(null);
  const [floatOrnaments, setFloatOrnamanents] = useState(false);
  const isOnScreen = useOnScreen({
    ref,
    threshold: 0.15,
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
      <div className={styles.container}>
        <picture>
          <source
            srcSet="/explain-desktop.avif"
            type="image/avif"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <source
            srcSet="/explain-desktop.webp"
            type="image/webp"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <source
            srcSet="/explain-desktop.png"
            type="image/png"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <img
            src="/explain-desktop.png"
            alt=""
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
        </picture>
        <Ornament1
          className={clsx(
            styles.ornament1,
            isOnScreen && styles.finalOrnament1,
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
        <Ornament2
          className={clsx(
            styles.ornament2,
            isOnScreen && styles.finalOrnament2,
            floatOrnaments && styles.float
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
        <picture>
          <source
            srcSet="/explain-img-desktop.avif"
            type="image/avif"
            className={clsx(
              styles.img,
              isOnScreen && styles.finalImg,
              floatOrnaments && styles.float
            )}
          />
          <source
            srcSet="/explain-img-desktop.webp"
            type="image/webp"
            className={clsx(
              styles.img,
              isOnScreen && styles.finalImg,
              floatOrnaments && styles.float
            )}
          />
          <source
            src="/explain-img-desktop.png"
            type="image/png"
            className={clsx(
              styles.img,
              isOnScreen && styles.finalImg,
              floatOrnaments && styles.float
            )}
          />
          <img
            src="/explain-img-desktop.png"
            alt=""
            className={clsx(
              styles.img,
              isOnScreen && styles.finalImg,
              floatOrnaments && styles.float
            )}
          />
        </picture>
      </div>
    </div>
  );
}
