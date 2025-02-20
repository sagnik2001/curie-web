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
import BannerComp from "./Banner";
import MidBanner from "./MidBanner";
import BenefitsComp from "./Benefits";

export default function DesktopLanding() {
  return (
    <div className={styles.container}>
      <Hero />
      <BenefitsComp/>
      <BannerComp/>
      <MidBanner/>
      <Banks/>
      <FAQComp/>
      <CompareComp/>
      {/* <Explain /> */}
      {/* <Welcome /> */}
     <FooterV2 landingPage />
    </div>
  );
}
