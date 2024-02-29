import Navbar from "@molecules/Navbar";
import Hero from "./Hero";
import Footer from "@molecules/Footer";
import IntroductionBanner from "./IntroductionBanner";

export default function DesktopLanding() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroductionBanner />
      <Footer landingPage />
    </>
  );
}
