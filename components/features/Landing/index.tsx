import Navbar from "@molecules/Navbar";
import * as styles from "./Landing.module.scss";
import Hero from "./Hero";
import DownloadMobile from "./DownloadMobile";
import IntroductionBand from "./IntroductionBand";
import Explain from "./Explain";
import Footer from "@molecules/Footer";
import Welcome from "./Welcome";
import Features from "./Features";
import { useRef } from "react";

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const snapContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.container} ref={containerRef}>
      <Navbar />
      <Hero />
      <IntroductionBand />
      <div ref={snapContainerRef}>
        <Explain />
        <Features />
      </div>
      <Welcome />
      <Footer landingPage />
      <DownloadMobile />
    </div>
  );
}
