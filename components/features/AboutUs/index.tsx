import StickiedNavbar from "@molecules/StickiedNavbar";
import * as styles from "./AboutUs.module.scss";
import Footer from "@molecules/Footer";

export default function AboutUs() {
  return (
    <>
      <StickiedNavbar />
      <div className={styles.container}>
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
      <Footer />
    </>
  );
}
