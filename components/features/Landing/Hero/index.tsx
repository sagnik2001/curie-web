import { calson } from "@utilities/font";
import * as styles from "./Hero.module.scss";
import ScrollSvg from "@svgs/scroll.svg";
import clsx from "clsx";
import Ornament1 from "@svgs/hero/ornament1.svg";
import Ornament2 from "@svgs/hero/ornament2.svg";
import Ornament3 from "@svgs/hero/ornament3.svg";
import Ornament4 from "@svgs/hero/ornament4.svg";
import Ornament5 from "@svgs/hero/ornament5.svg";
import Ornament6 from "@svgs/hero/ornament6.svg";
import Ornament7 from "@svgs/hero/ornament7.svg";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Ornament1 className={styles.ornament1} />
      <Ornament2 className={styles.ornament2} />
      <Ornament3 className={styles.ornament3} />
      <Ornament4 className={styles.ornament4} />
      <Ornament5 className={styles.ornament5} />
      <Ornament6 className={styles.ornament6} />
      <Ornament7 className={styles.ornament7} />
      <h1 className={styles.heading}>
        <span className={styles.first}>Spend</span>
        <span className={styles.first}> while your</span>
        <span className={styles.second}>money multiplies</span>
      </h1>
      <div className={styles.scrollBtn}>
        <ScrollSvg />
        <div className={clsx(calson.className, styles.text)}>scroll</div>
      </div>
    </div>
  );
}
