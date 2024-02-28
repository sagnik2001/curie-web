import clsx from "clsx";
import * as styles from "./Navbar.module.scss";
import CurieLogo from "@svgs/curie-logo.svg";

export default function Navbar({ className = "" }: { className?: string }) {
  return (
    <div className={clsx(styles.container, className)}>
      <CurieLogo />
    </div>
  );
}
