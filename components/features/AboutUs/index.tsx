import StickiedNavbar from "@molecules/StickiedNavbar";
import * as styles from "./AboutUs.module.scss";
import FooterV2 from "@molecules/FooterV2";
import clsx from "clsx";
import { secondaryFont } from "@utilities/font";
import Navbar from "@molecules/Navbar";
import LogoContainer from "@features/LogoContainer";

export default function AboutUs() {
  return (
    <div className={styles.page}>
      <LogoContainer/>
      <Navbar className={styles.nav} />
      <div className={clsx(styles.container,secondaryFont.className)}>
        <h1 className={styles.title}>About us</h1>
        <p className={styles.para}>
          At Curie Money, we believe that every individual&apos;s financial
          journey is unique and deserves a tailored approach. Founded in the
          bustling heart of Bangalore, India, Curie Money is reshaping the way
          people think about and manage their finances. We want to be your
          gateway to a new era of financial empowerment.
        </p>
        <p className={styles.para}>
          We know that you value both convenience and growth, hence we at Curie
          Money offer you the best of both worlds - the ease and liquidity of a
          bank account combined with the potential for higher returns. Your
          finances will be in motion, working for you, while you remain in
          control.
        </p>
        <p className={styles.para}>
          As you embark on your financial journey with Curie Money, you&apos;re
          not just opening an account; you&apos;re gaining a trusted companion
          that supports you in making the most of your money. Experience the
          synergy of regulation, innovation, and security, all in one place.
        </p>
      </div>
      <FooterV2 />
    </div>
  );
}
