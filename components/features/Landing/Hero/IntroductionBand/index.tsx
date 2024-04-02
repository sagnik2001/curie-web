import clsx from "clsx";
import * as styles from "./IntroductionBand.module.scss";
import { calson } from "@utilities/font";

export default function IntroductionBand() {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.baseBand, styles.band)}>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
        <span className={clsx(calson.className)}>India&apos;s first</span>
      </div>
    </div>
  );
}
