import clsx from "clsx";
import * as styles from "./Invested.module.scss";
import useOnScreen from "@hooks/useOnScreen";
import { useEffect, useRef, useState } from "react";

export default function Invested() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false); 
  const isOnScreen = useOnScreen({
    ref,
    threshold: 0.15,
    dontUpdateAfterIntersection: false,
  });

  useEffect(() => {
    if (isOnScreen) {
      setAnimate(true); 
    } else {
      setAnimate(false); 
    }
  }, [isOnScreen]);
  return (
    <div ref={ref} className={styles.box}>
      <div className={styles.container}>
      <picture>
          
          <source
            src="BG.png"
            type="image/png"
            className={clsx(styles.bg)}
          />
          <img
            src="BG.png"
            alt=""
            className={clsx(styles.bg)}
          />
        </picture>
        <picture>
          <source
            srcSet="/invested.avif"
            type="image/avif"
            className={clsx(styles.img,animate && styles.slideIn)}
          />
          <source
            srcSet="/invested.webp"
            type="image/webp"
            className={clsx(styles.img,animate && styles.slideIn)}
          />
          <source
            srcSet="/invested.png"
            type="image/png"
            className={clsx(styles.img,animate && styles.slideIn)}
          />
          <img src="/invested.png" alt="" className={clsx(styles.img,animate && styles.slideIn)}
 />
        </picture>
        <div className={clsx(styles.titleContainer, animate && styles.slideRight)}>
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
        <div className={styles.bankImg}>
          <img src="/bank.png" alt="bank" />
        </div>
        </div>
      </div>
    </div>
  );
}
