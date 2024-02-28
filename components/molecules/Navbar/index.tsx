import clsx from "clsx";
import * as styles from "./Navbar.module.scss";
import CurieLogo from "@svgs/curie-logo.svg";
import { calson } from "@utilities/font";
import Link from "next/link";

export default function Navbar({ className = "" }: { className?: string }) {
  return (
    <div className={clsx(styles.container, className)}>
      <Link href="/">
        <CurieLogo />
      </Link>
      <div className={styles.btn}>
        <a
          href="https://play.google.com/store/apps/details?id=com.yield.curie_money"
          target="_blank"
          className={calson.className}
        >
          <span>download curie</span>
        </a>
      </div>
    </div>
  );
}
