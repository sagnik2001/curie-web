import clsx from "clsx";
import * as styles from "./Navbar.module.scss";
import CurieLogo from "@svgs/curie-logo.svg";
import { calson } from "@utilities/font";

export default function Navbar({ className = "" }: { className?: string }) {
  return (
    <div className={clsx(styles.container, className)}>
      <CurieLogo />
      <div className={styles.btn}>
        <button className={calson.className}>
          <span>download curie</span>
        </button>
      </div>
    </div>
  );
}
