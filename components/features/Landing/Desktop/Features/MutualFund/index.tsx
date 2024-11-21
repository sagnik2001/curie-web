import Ornament1 from "@svgs/invested-desktop/ornament1.svg";
import Ornament2 from "@svgs/invested-desktop/ornament2.svg";
import Ornament3 from "@svgs/invested-desktop/ornament3.svg";
import Ornament4 from "@svgs/invested-desktop/ornament4.svg";
import * as styles from "./MutualFund.module.scss";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "@hooks/useOnScreen";
import clsx from "clsx";
import CompareComponent from "./CompareComponent";

export default function MutualFund() {
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
            srcSet="/desktop/graph.avif"
            type="image/avif"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <source
            srcSet="/desktop/graph.webp"
            type="image/webp"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <source
            src="/desktop/graph.png"
            type="image/png"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <img
            src="/desktop/graph.png"
            alt=""
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
        </picture>
        <div className={styles.contentContainer}>
     
      <div className={styles.titleContainer}>
        <h2 className={clsx(styles.title, isOnScreen && styles.finalTitle)}>
          <span>Make your money
          </span>
          <span>  work for you
          </span>
        </h2>
        <p
          className={clsx(
            styles.description,
            isOnScreen && styles.finalDescription
          )}
        >
         <span>Boost your savings with mutual fund backed</span>
         <span>savings account</span>
        </p>
        </div>
        <div>
        <picture>
        
        <source
          srcSet="/desktop/mutualFund.avif"
          type="image/avif"
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            floatOrnaments && styles.float
          )}
        />
        <source
          srcSet="/desktop/mutualFund.webp"
          type="image/webp"
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            floatOrnaments && styles.float
          )}
        />
        <source
          src="/desktop/mutualFund.png"
          type="image/png"
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            floatOrnaments && styles.float
          )}
        />
        <img
          src="/desktop/mutualFund.png"
          alt=""
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            floatOrnaments && styles.float
          )}
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
            isOnScreen && styles.finalOrnament2,
            floatOrnaments && styles.float
          )}
        />
        </div>
      </div>
     <CompareComponent/>
      </div>
    </div>
  );
}
