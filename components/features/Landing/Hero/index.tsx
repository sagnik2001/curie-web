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
import { useEffect, useState } from "react";

export default function Hero() {
  const [loadAnimation, setLoadAnimation] = useState(false);
  useEffect(() => {
    setLoadAnimation(true);
  }, []);
  return (
    <div className={styles.container}>
      <img src="/bg-top-1.png" className={styles.bg} />
      <Ornament1
        className={clsx(
          styles.ornament1,
          loadAnimation && styles.animateOrnament1,
          loadAnimation && styles.float
        )}
      />
      <Ornament2
        className={clsx(
          styles.ornament2,
          loadAnimation && styles.animateOrnament2,
          loadAnimation && styles.float
        )}
      />
      <Ornament3
        className={clsx(
          styles.ornament3,
          loadAnimation && styles.animateOrnament3,
          loadAnimation && styles.float
        )}
      />
      <Ornament4
        className={clsx(
          styles.ornament4,
          loadAnimation && styles.animateOrnament4,
          loadAnimation && styles.ornamentfloat4
        )}
      />
      <Ornament5
        className={clsx(
          styles.ornament5,
          loadAnimation && styles.animateOrnament5,
          loadAnimation && styles.ornamentfloat5
        )}
      />
      <Ornament6
        className={clsx(
          styles.ornament6,
          loadAnimation && styles.animateOrnament6,
          loadAnimation && styles.float
        )}
      />
      <Ornament7
        className={clsx(
          styles.ornament7,
          loadAnimation && styles.animateOrnament7,
          loadAnimation && styles.float
        )}
      />
      <h1
        className={clsx(styles.heading, loadAnimation && styles.animateHeading)}
      >
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
