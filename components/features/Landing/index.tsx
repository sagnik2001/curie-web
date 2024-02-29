import Navbar from "@molecules/Navbar";
import * as styles from "./Landing.module.scss";
import Hero from "./Hero";
import DownloadMobile from "./DownloadMobile";
import IntroductionBand from "./IntroductionBand";
import Explain from "./Explain";
import Footer from "@molecules/Footer";
import Welcome from "./Welcome";
import Features from "./Features";
import { useEffect, useState } from "react";
import DesktopLanding from "./Desktop";

type ScreenSize = "unknown" | "mobile" | "not-mobile";

export default function Landing() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("unknown");
  useEffect(() => {
    const screenSize = window.screen.width > 767 ? "not-mobile" : "mobile";
    setScreenSize(screenSize);
  }, []);
  if (screenSize === "unknown") return <></>;
  if (screenSize === "not-mobile") return <DesktopLanding />;

  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <IntroductionBand />
      <Explain />
      <Features />
      <Welcome />
      <Footer landingPage />
      <DownloadMobile />
    </div>
  );
}
