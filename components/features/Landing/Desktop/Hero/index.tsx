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

export default function Hero() {
  return (
    <div style={{ position: "relative" }}>
      <Ornament1 className={styles.ornament1} />
      <div className={styles.container}>
        <img src="/desktop/bg-hero.png" alt="" className={styles.bg} />
        <Ornament2 className={styles.ornament2} />
        <Ornament3 className={styles.ornament3} />
        <Ornament5 className={styles.ornament5} />
        <Ornament4 className={styles.ornament4} />
        <Ornament6 className={styles.ornament6} />
        <Ornament7 className={styles.ornament7} />
        <Ornament8 className={styles.ornament8} />
        <div>
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
