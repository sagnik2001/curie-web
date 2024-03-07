import Navbar from "@molecules/Navbar";
import Hero from "./Hero";
import Footer from "@molecules/Footer";
import IntroductionBanner from "./IntroductionBanner";
import Explain from "./Explain";
import Features from "./Features";
import Welcome from "./Welcome";
import * as styles from "./Desktop.module.scss";

export default function DesktopLanding() {
  return (
    <div className={styles.container}>
      <Navbar className={styles.nav} />
      <Hero />
      <IntroductionBanner />
      <Explain />
      <Features />
      <Welcome />
      <Footer landingPage />
    </div>
  );
}
