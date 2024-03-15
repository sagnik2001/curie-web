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
import { useEffect, useState } from "react";

export default function Hero() {
  const [loadAnimation, setLoadAnimation] = useState(false);
  useEffect(() => {
    setLoadAnimation(true);
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <Ornament1
        className={clsx(
          styles.ornament1,
          loadAnimation && styles.float,
          loadAnimation && styles.animateOrnament1
        )}
      />
      <div className={styles.container}>
        <img src="/desktop/bg-hero.png" alt="" className={styles.bg} />
        <Ornament2
          className={clsx(
            styles.ornament2,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament2
          )}
        />
        <Ornament3
          className={clsx(
            styles.ornament3,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament3
          )}
        />
        <Ornament5
          className={clsx(
            styles.ornament5,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament5
          )}
        />
        <Ornament4
          className={clsx(
            styles.ornament4,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament4
          )}
        />
        <Ornament6
          className={clsx(
            styles.ornament6,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament6
          )}
        />
        <Ornament7
          className={clsx(
            styles.ornament7,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament7
          )}
        />
        <Ornament8
          className={clsx(
            styles.ornament8,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament8
          )}
        />
        <div
          className={clsx(styles.titleBox, loadAnimation && styles.animatedBox)}
        >
          <h1 className={styles.title}>
            <span>Spend</span>
            <span>while your</span>
          </h1>
          <p className={styles.para}>money multiplies</p>
        </div>
        <div className={styles.scrollBtn}>
          <ScrollSvg />
          <div className={clsx(calson.className, styles.text)}>scroll</div>
        </div>
      </div>
    </div>
  );
}
