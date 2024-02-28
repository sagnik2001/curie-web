import clsx from "clsx";
import * as styles from "./IntroductionBand.module.scss";
import { calson } from "@utilities/font";

export default function IntroductionBand() {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.baseBand, styles.inroBand)}>
        <span className={clsx(calson.className)}>introducing</span>
        <span className={clsx(calson.className)}>introducing</span>
        <span className={clsx(calson.className)}>introducing</span>
        <span className={clsx(calson.className)}>introducing</span>
      </div>
      <div className={clsx(styles.baseBand, styles.band)}>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
      </div>
      <div className={styles.marker} />
      <div className={styles.marker2} />
      <div className={styles.marker3} />
      <div className={styles.marker4} />
    </div>
  );
}
