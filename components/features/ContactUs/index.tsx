import StickiedNavbar from "@molecules/StickiedNavbar";
import * as styles from "./ContactUs.module.scss";
import Footer from "@molecules/Footer";

export default function ContactUs() {
  return (
    <>
      <StickiedNavbar />
      <div className={styles.container}>
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
      <Footer />
    </>
  );
}
