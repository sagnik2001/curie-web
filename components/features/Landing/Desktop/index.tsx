import Navbar from "@molecules/Navbar";
import Hero from "./Hero";
import Footer from "@molecules/Footer";
import IntroductionBanner from "./IntroductionBanner";
import Explain from "./Explain";
import Features from "./Features";
import Welcome from "./Welcome";

export default function DesktopLanding() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroductionBanner />
      <Explain />
      <Features />
      <Welcome />
      <Footer landingPage />
    </>
  );
}
