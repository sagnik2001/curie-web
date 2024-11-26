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
  const [animate, setAnimate] = useState(false); 
  const isOnScreen = useOnScreen({
    ref,
    threshold: 0.15,
    dontUpdateAfterIntersection: false,
  });
  useEffect(() => {
    if (!isOnScreen || floatOrnaments) return;
    setTimeout(() => {
      setFloatOrnamanents(true);
    }, 800);
  }, [isOnScreen, floatOrnaments]);
  useEffect(() => {
    if (isOnScreen) {
      setAnimate(true); 
    } else {
      setAnimate(false); 
    }
  }, [isOnScreen]);
  return (
    <div className={styles.box} ref={ref}>
   
      <div className={styles.container}>
        <picture>
          <source
            srcSet="/desktop/bg-invested.avif"
            type="image/avif"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <source
            srcSet="/desktop/bg-invested.webp"
            type="image/webp"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <source
            src="/desktop/bg-invested.png"
            type="image/png"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <img
            src="/desktop/bg-invested.png"
            alt=""
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
        </picture>
        <div className={styles.contentContainer}>
        <picture>
        <source
          srcSet="/desktop/invested.avif"
          type="image/avif"
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            floatOrnaments && styles.float,
            animate && styles.slideIn
          )}
        />
        <source
          srcSet="/desktop/invested.webp"
          type="image/webp"
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            floatOrnaments && styles.float,
            animate && styles.slideIn
          )}
        />
        <source
          src="/desktop/invested.png"
          type="image/png"
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            floatOrnaments && styles.float,
            animate && styles.slideIn
          )}
        />
        <img
          src="/desktop/invested.png"
          alt=""
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            floatOrnaments && styles.float,
            animate && styles.slideIn
          )}
        />
      </picture>
      <div className={clsx(isOnScreen && styles.slideRight, styles.titleContainer)}>
        <h2 className={clsx(styles.title)}>
          <span>Instant UPI on
          </span>
          <span>mutual funds</span>
        </h2>
        <p
          className={clsx(
            styles.description,
          )}
        >
         Scan & Pay to your nearest merchant
        </p>
        <div>
          <img src="/desktop/bank.png" alt="bank" />
        </div>
        </div>
      </div>
     
      </div>
    </div>
  );
}
