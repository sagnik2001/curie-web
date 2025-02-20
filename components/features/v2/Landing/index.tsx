import * as styles from "./Landing.module.scss";
import Hero from "./Hero";
import DownloadMobile from "./DownloadMobile";
import Explain from "./Explain";
import Footer from "@molecules/Footer";
import Welcome from "./Welcome";
import Features from "./Features";
import { useEffect, useState } from "react";
import DesktopLanding from "./Desktop";
import Marquee from "./Desktop/Marquee";
import IntroductionBanner from "./Hero/IntroductionBand";
import Banks from "./Banks";
import FAQComp from "./Faqs";
import FooterV2 from "@molecules/FooterV2";
import BenefitsComp from "./Desktop/Benefits";

type ScreenSize = "unknown" | "mobile" | "not-mobile";

export default function LandingV2() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("unknown");
  useEffect(() => {
    const handleScreenSize = () => {
      const screenSize = window.screen.width > 767 ? "not-mobile" : "mobile";
      setScreenSize(screenSize);
    };
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);
    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);
  if (screenSize === "unknown") return <></>;
  if (screenSize === "not-mobile") return <DesktopLanding />;

  return (
    <div className={styles.container}>
      <div style={{ overflow: "hidden" }}>
        <Hero />
        <BenefitsComp/>
        <FAQComp/>
        <FooterV2 landingPage />
        <DownloadMobile />
      </div>
    </div>
  );
}
