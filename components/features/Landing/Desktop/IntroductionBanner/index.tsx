import clsx from "clsx";
import * as styles from "./IntroductionBanner.module.scss";
import { calson } from "@utilities/font";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "@hooks/useOnScreen";

export default function IntroductionBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const isOnScreenRef = useRef(false);
  const isOnScreen = useOnScreen(ref);
  isOnScreenRef.current = isOnScreen;
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.container} ref={ref}>
      <div
        className={clsx(styles.baseBand, styles.introducing)}
        style={{
          left: `calc(50% + ${offset * 0.1}%)`,
          bottom: `-${offset * 0.06}%`,
        }}
      >
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
        <span className={calson.className}>introducing</span>
      </div>
      <div
        className={clsx(styles.baseBand, styles.india)}
        style={{
          left: `calc(50% + ${offset * 0.1}%)`,
          bottom: `${offset * 0.07}%`,
        }}
      >
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
        <span className={calson.className}>India's first</span>
      </div>
    </div>
  );
}
