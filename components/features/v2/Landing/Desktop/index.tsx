import Hero from "./Hero";
import Footer from "@molecules/Footer";
import Explain from "./Explain";
import Features from "./Features";
import Welcome from "./Welcome";
import * as styles from "./Desktop.module.scss";
import Marquee from "./Marquee";
import IntroductionBanner from "./Hero/IntroductionBanner";
import Banks from "./Banks";
import FAQComp from "./Faqs";
import FooterV2 from "@molecules/FooterV2";
import CompareComp from "./Compare";

export default function DesktopLanding() {
  return (
    <div className={styles.container}>
      <Hero />
      <IntroductionBanner/>
      <Banks/>
      <FAQComp/>
      <CompareComp/>
      {/* <Explain /> */}
      {/* <Welcome /> */}
     <FooterV2 landingPage />
    </div>
  );
}
