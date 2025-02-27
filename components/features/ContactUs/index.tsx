import * as styles from "./ContactUs.module.scss";
import FooterV2 from "@molecules/FooterV2";
import clsx from "clsx";
import { secondaryFont } from "@utilities/font";
import Navbar from "@molecules/Navbar";
import LogoContainer from "@features/LogoContainer";

export default function ContactUs() {
  return (
    <div className={styles.page}>
      <LogoContainer/>
      <Navbar className={styles.nav} />
      <div className={clsx(styles.container,secondaryFont.className)}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.para}>For assistance, please contact us at:</p>
        <ul className={styles.para}>
          <li>
            <b>Phone</b>: +91- 97564 76649
          </li>
          <li>
            <b>Email</b>: support@curie.money
          </li>
          <li>
            <b>Address</b>: 1142, 6th Main Rd, Sector 7, HSR Layout, Bengaluru,
            Karnataka 560102
          </li>
        </ul>
      </div>
      <FooterV2 />
    </div>
  );
}
