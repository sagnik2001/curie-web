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

export default function HassleFree() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img src="/desktop/img-hasslefree.png" alt="" className={styles.img} />
        <Ornament1 className={styles.ornament1} />
        <Ornament2 className={styles.ornament2} />
        <Ornament3 className={styles.ornament3} />
        <Ornament4 className={styles.ornament4} />
        <Ornament5 className={styles.ornament5} />
        <Ornament6 className={styles.ornament6} />
        <Ornament7 className={styles.ornament7} />
        <Ornament8 className={styles.ornament8} />
        <Ornament9 className={styles.ornament9} />
        <div className={styles.contentBox}>
          <h2 className={styles.title}>
            <span>Use your money</span>
            <span>hassle free</span>
          </h2>
          <p className={styles.description}>with UPI & debit card</p>
        </div>
      </div>
      <img src="/desktop/bg-hasslefree.png" alt="" className={styles.bg} />
    </div>
  );
}
