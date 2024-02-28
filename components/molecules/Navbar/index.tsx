import * as styles from "./Navbar.module.scss";
import CurieLogo from "@svgs/curie-logo.svg";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <CurieLogo />
    </div>
  );
}
