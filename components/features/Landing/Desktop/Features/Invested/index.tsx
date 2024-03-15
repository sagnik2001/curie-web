import Ornament1 from "@svgs/invested-desktop/ornament1.svg";
import Ornament2 from "@svgs/invested-desktop/ornament2.svg";
import Ornament3 from "@svgs/invested-desktop/ornament3.svg";
import Ornament4 from "@svgs/invested-desktop/ornament4.svg";
import * as styles from "./Invested.module.scss";

export default function Invested() {
  return (
    <div className={styles.box}>
      <Ornament1 className={styles.ornament1} />
      <div className={styles.container}>
        <Ornament2 className={styles.ornament2} />
        <Ornament3 className={styles.ornament3} />
        <Ornament4 className={styles.ornament4} />
        <img src="/desktop/bg-invested.png" alt="" className={styles.bg} />
        <h2 className={styles.title}>
          <span>Stay invested</span>
          <span>all the time</span>
        </h2>
        <p className={styles.description}>with the convenience of bank</p>
      </div>
      <img src="/desktop/img-invested.png" alt="" className={styles.img} />
    </div>
  );
}
