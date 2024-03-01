import * as styles from "./Safe.module.scss";
import Ornament1 from "@svgs/safe-desktop/ornament1.svg";
import Ornament2 from "@svgs/safe-desktop/ornament2.svg";
import Ornament3 from "@svgs/safe-desktop/ornament3.svg";
import Ornament4 from "@svgs/safe-desktop/ornament4.svg";
import Ornament5 from "@svgs/safe-desktop/ornament5.svg";

export default function Safe() {
  return (
    <div className={styles.container}>
      <img src="/desktop/bg-save.png" alt="" className={styles.bg} />
      <Ornament1 className={styles.ornament1} />
      <Ornament2 className={styles.ornament2} />
      <Ornament3 className={styles.ornament3} />
      <Ornament4 className={styles.ornament4} />
      <Ornament5 className={styles.ornament5} />
      <h2 className={styles.title}>
        <span>Your money is</span>
        <span>always safe</span>
      </h2>
      <p className={styles.description}>with our licensed Bank and AMC</p>
      <img src="/desktop/img-save.png" alt="" className={styles.img} />
    </div>
  );
}
