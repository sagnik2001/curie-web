import Navbar from "@molecules/Navbar";
import Hero from "./Hero";
import Footer from "@molecules/Footer";
import IntroductionBanner from "./IntroductionBanner";
import Explain from "./Explain";
import Features from "./Features";
import Welcome from "./Welcome";
import { useEffect } from "react";
import * as styles from "./Desktop.module.scss";

export default function DesktopLanding() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
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
