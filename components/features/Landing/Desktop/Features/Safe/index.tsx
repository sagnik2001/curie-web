import useOnScreen from "@hooks/useOnScreen";
import * as styles from "./Safe.module.scss";
import Ornament1 from "@svgs/safe-desktop/ornament1.svg";
import Ornament2 from "@svgs/safe-desktop/ornament2.svg";
import Ornament3 from "@svgs/safe-desktop/ornament3.svg";
import Ornament4 from "@svgs/safe-desktop/ornament4.svg";
import Ornament5 from "@svgs/safe-desktop/ornament5.svg";
import { useRef } from "react";
import clsx from "clsx";

export default function Safe() {
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen({
    ref,
    threshold: 0.35,
    dontUpdateAfterIntersection: true,
  });
  return (
    <div className={styles.box} ref={ref}>
      <div className={styles.container}>
        <picture>
          <source
            srcSet="/desktop/bg-save.avif"
            type="image/avif"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <source
            srcSet="/desktop/bg-save.webp"
            type="image/webp"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <source
            src="/desktop/bg-save.png"
            type="image/png"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <img
            src="/desktop/bg-save.png"
            alt=""
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
        </picture>
        <Ornament1
          className={clsx(
            styles.ornament1,
            isOnScreen && styles.finalOrnament1
          )}
        />
        <Ornament2
          className={clsx(
            styles.ornament2,
            isOnScreen && styles.finalOrnament2
          )}
        />
        <Ornament3
          className={clsx(
            styles.ornament3,
            isOnScreen && styles.finalOrnament3
          )}
        />
        <Ornament4
          className={clsx(
            styles.ornament4,
            isOnScreen && styles.finalOrnament4
          )}
        />
        <Ornament5
          className={clsx(
            styles.ornament5,
            isOnScreen && styles.finalOrnament5
          )}
        />
        <h2 className={clsx(styles.title, isOnScreen && styles.finalTitle)}>
          <span>Your money is</span>
          <span>always safe</span>
        </h2>
        <p
          className={clsx(
            styles.description,
            isOnScreen && styles.finalDescription
          )}
        >
          with our licensed Bank and AMC
        </p>
        <picture>
          <source
            srcSet="/desktop/img-save.avif"
            type="image/avif"
            className={clsx(styles.img, isOnScreen && styles.finalImg)}
          />
          <source
            srcSet="/desktop/img-save.webp"
            type="image/webp"
            className={clsx(styles.img, isOnScreen && styles.finalImg)}
          />
          <source
            src="/desktop/img-save.png"
            type="image/png"
            className={clsx(styles.img, isOnScreen && styles.finalImg)}
          />
          <img
            src="/desktop/img-save.png"
            alt=""
            className={clsx(styles.img, isOnScreen && styles.finalImg)}
          />
        </picture>
      </div>
    </div>
  );
}
