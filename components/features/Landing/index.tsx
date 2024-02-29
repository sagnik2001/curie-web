import Navbar from "@molecules/Navbar";
import * as styles from "./Landing.module.scss";
import Hero from "./Hero";
import DownloadMobile from "./DownloadMobile";
import IntroductionBand from "./IntroductionBand";
import Explain from "./Explain";
import Footer from "@molecules/Footer";
import Welcome from "./Welcome";

export default function Landing() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <IntroductionBand />
      <Explain />
      <Welcome />
      <Footer landingPage />
      <DownloadMobile />
    </div>
  );
}
