import { calson } from "@utilities/font";
import * as styles from "./Hero.module.scss";
import clsx from "clsx";
import ScrollSvg from "@svgs/scroll.svg";
import Ornament1 from "@svgs/desktop-hero/ornament1.svg";
import Ornament2 from "@svgs/desktop-hero/ornament2.svg";
import Ornament3 from "@svgs/desktop-hero/ornament3.svg";
import Ornament4 from "@svgs/desktop-hero/ornament4.svg";
import Ornament5 from "@svgs/desktop-hero/ornament5.svg";
import Ornament6 from "@svgs/desktop-hero/ornament6.svg";
import Ornament7 from "@svgs/desktop-hero/ornament7.svg";
import Ornament8 from "@svgs/desktop-hero/ornament8.svg";
import { useEffect, useRef, useState } from "react";
import usePauseAnimation from "@hooks/usePauseAnimation";

export default function Hero() {
  const [loadAnimation, setLoadAnimation] = useState(false);
  const ornament1Ref = useRef<HTMLElement>(null);
  const ornament2Ref = useRef<HTMLElement>(null);
  const ornament3Ref = useRef<HTMLElement>(null);
  const ornament4Ref = useRef<HTMLElement>(null);
  const ornament5Ref = useRef<HTMLElement>(null);
  const ornament6Ref = useRef<HTMLElement>(null);
  const ornament7Ref = useRef<HTMLElement>(null);
  const ornament8Ref = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLSourceElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  usePauseAnimation(ornament1Ref);
  usePauseAnimation(ornament2Ref);
  usePauseAnimation(ornament3Ref);
  usePauseAnimation(ornament4Ref);
  usePauseAnimation(ornament5Ref);
  usePauseAnimation(ornament6Ref);
  usePauseAnimation(ornament7Ref);
  usePauseAnimation(ornament8Ref);
  usePauseAnimation(bgRef);
  usePauseAnimation(textRef);
  usePauseAnimation(paraRef);

  useEffect(() => {
    setTimeout(() => {
      setLoadAnimation(true);
    }, 500);
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <Ornament1
        className={clsx(
          styles.ornament1,
          loadAnimation && styles.float,
          loadAnimation && styles.animateOrnament1
        )}
        ref={ornament1Ref}
      />
      <div className={styles.container}>
        <picture>
          <source
            srcSet="/desktop/bg-hero.avif"
            type="image/avif"
            className={styles.bg}
            ref={bgRef}
          />
          <source
            srcSet="/desktop/bg-hero.webp"
            type="image/webp"
            className={styles.bg}
          />
          <source
            srcSet="/desktop/bg-hero.png"
            type="image/png"
            className={styles.bg}
          />
          <img src="/desktop/bg-hero.png" alt="" className={styles.bg} />
        </picture>
        <Ornament2
          className={clsx(
            styles.ornament2,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament2
          )}
          ref={ornament2Ref}
        />
        <Ornament3
          className={clsx(
            styles.ornament3,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament3
          )}
          ref={ornament3Ref}
        />
        <Ornament5
          className={clsx(
            styles.ornament5,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament5
          )}
          ref={ornament5Ref}
        />
        <Ornament4
          className={clsx(
            styles.ornament4,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament4
          )}
          ref={ornament4Ref}
        />
        <Ornament6
          className={clsx(
            styles.ornament6,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament6
          )}
          ref={ornament6Ref}
        />
        <Ornament7
          className={clsx(
            styles.ornament7,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament7
          )}
          ref={ornament7Ref}
        />
        <Ornament8
          className={clsx(
            styles.ornament8,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament8
          )}
          ref={ornament8Ref}
        />
        <div
          className={clsx(styles.titleBox, loadAnimation && styles.animatedBox)}
        >
          <h1 className={styles.title} ref={textRef}>
            <span>Spend</span>
            <span>while your</span>
          </h1>
          <p className={styles.para} ref={paraRef}>
            money multiplies
          </p>
        </div>
        <div className={styles.scrollBtn}>
          <ScrollSvg />
          <div className={clsx(calson.className, styles.text)}>scroll</div>
        </div>
      </div>
    </div>
  );
}
