import Navbar from "@molecules/Navbar";
import * as styles from "./Landing.module.scss";
import Hero from "./Hero";
import DownloadMobile from "./DownloadMobile";

export default function Landing() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <DownloadMobile />
    </div>
  );
}
