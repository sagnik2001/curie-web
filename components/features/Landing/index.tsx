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

type ScreenSize = "unknown" | "mobile" | "not-mobile";

export default function Landing() {
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
        <IntroductionBanner/>
        {/* <Features /> */}
        {/* <Explain />
        <Welcome /> */}
        <Banks/>
        <FAQComp/>
        <Marquee isMobile={screenSize}/>
        <Footer landingPage />
        <DownloadMobile />
      </div>
    </div>
  );
}
