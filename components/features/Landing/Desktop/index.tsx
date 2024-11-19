import Hero from "./Hero";
import Footer from "@molecules/Footer";
import Explain from "./Explain";
import Features from "./Features";
import Welcome from "./Welcome";
import * as styles from "./Desktop.module.scss";
import Marquee from "./Marquee";

export default function DesktopLanding() {
  return (
    <div className={styles.container}>
      <Hero />
      {/* <Explain /> */}
      {/* <Features /> */}
      {/* <Welcome /> */}
      <Marquee/>
      <Footer landingPage />
    </div>
  );
}
