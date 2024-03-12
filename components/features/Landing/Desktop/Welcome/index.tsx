import clsx from "clsx";
import * as styles from "./Welcome.module.scss";
import { calson } from "@utilities/font";
import MoneyWorkBand from "./MoneyWorkBand";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <MoneyWorkBand />
      <h4 className={styles.title}>
        <span className={styles.imp}>Be a part of</span>
        <span className={clsx(styles.content, calson.className)}>
          next-gen banking
        </span>
      </h4>
      <div className={styles.imgBox}>
        <img src="/welcome-desktop.png" alt="" className={styles.img} />
      </div>
    </div>
  );
}
