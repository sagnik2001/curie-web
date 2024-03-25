import useOnScreen from "@hooks/useOnScreen";
import * as styles from "./HassleFree.module.scss";
import Ornament1 from "@svgs/hasslefree-desktop/ornament1.svg";
import Ornament2 from "@svgs/hasslefree-desktop/ornament2.svg";
import Ornament3 from "@svgs/hasslefree-desktop/ornament3.svg";
import Ornament4 from "@svgs/hasslefree-desktop/ornament4.svg";
import Ornament5 from "@svgs/hasslefree-desktop/ornament5.svg";
import Ornament6 from "@svgs/hasslefree-desktop/ornament6.svg";
import Ornament7 from "@svgs/hasslefree-desktop/ornament7.svg";
import Ornament8 from "@svgs/hasslefree-desktop/ornament8.svg";
import Ornament9 from "@svgs/hasslefree-desktop/ornament9.svg";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

export default function HassleFree() {
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
      <div className={styles.container}>
        <picture>
          <source
            srcSet="/desktop/img-hasslefree.avif"
            type="image/avif"
            className={clsx(styles.img, isOnScreen && styles.finalImg)}
          />
          <source
            srcSet="/desktop/img-hasslefree.webp"
            type="image/webp"
            className={clsx(styles.img, isOnScreen && styles.finalImg)}
          />
          <source
            src="/desktop/img-hasslefree.png"
            type="image/png"
            className={clsx(styles.img, isOnScreen && styles.finalImg)}
          />
          <img
            src="/desktop/img-hasslefree.png"
            alt=""
            className={clsx(styles.img, isOnScreen && styles.finalImg)}
          />
        </picture>

        <Ornament1
          className={clsx(
            styles.ornament1,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <Ornament2
          className={clsx(
            styles.ornament2,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <Ornament3
          className={clsx(
            styles.ornament3,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <Ornament4
          className={clsx(
            styles.ornament4,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <Ornament5
          className={clsx(
            styles.ornament5,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <Ornament6
          className={clsx(
            styles.ornament6,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <Ornament7
          className={clsx(
            styles.ornament7,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <Ornament8
          className={clsx(
            styles.ornament8,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <Ornament9
          className={clsx(
            styles.ornament9,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}
        />
        <div className={styles.contentBox}>
          <h2 className={clsx(styles.title, isOnScreen && styles.finalTitle)}>
            <span>Use your money</span>
            <span>hassle free</span>
          </h2>
          <p
            className={clsx(
              styles.description,
              isOnScreen && styles.finalDescription
            )}
          >
            with UPI & debit card
          </p>
        </div>
      </div>
      <picture>
        <source
          srcSet="/desktop/bg-hasslefree.avif"
          type="image/avif"
          className={clsx(styles.bg, isOnScreen && styles.finalBg)}
        />
        <source
          srcSet="/desktop/bg-hasslefree.webp"
          type="image/webp"
          className={clsx(styles.bg, isOnScreen && styles.finalBg)}
        />
        <source
          src="/desktop/bg-hasslefree.png"
          type="image/png"
          className={clsx(styles.bg, isOnScreen && styles.finalBg)}
        />
        <img
          src="/desktop/bg-hasslefree.png"
          alt=""
          className={clsx(styles.bg, isOnScreen && styles.finalBg)}
        />
      </picture>
    </div>
  );
}
