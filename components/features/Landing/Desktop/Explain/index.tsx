import * as styles from "./Explain.module.scss";
import Ornament1 from "@svgs/explain-desktop/ornament1.svg";
import Ornament2 from "@svgs/explain-desktop/ornament2.svg";
import Ornament3 from "@svgs/explain-desktop/ornament3.svg";

export default function Explain() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img src="/explain-desktop.png" alt="" className={styles.bg} />
        <Ornament1 className={styles.ornament1} />
        <Ornament3 className={styles.ornament3} />
        <Ornament2 className={styles.ornament2} />
        <h2 className={styles.title}>
          <span>High yield</span>
          <span>savings account</span>
        </h2>
        <ul className={styles.para}>
          <li>No hidden fees</li>
          <li>Enjoy higher returns</li>
        </ul>
        <img src="/explain-img-desktop.png" alt="" className={styles.img} />
      </div>
    </div>
  );
}
