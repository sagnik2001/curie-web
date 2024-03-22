import clsx from "clsx";
import * as styles from "./DownloadMobile.module.scss";
import { calson } from "@utilities/font";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function DownloadMobile() {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    fetch("/cta.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div
      className={styles.btn}
      onClick={() =>
        window.open(
          "https://play.google.com/store/apps/details?id=com.yield.curie_money",
          "_blank"
        )
      }
    >
      <Lottie animationData={animationData} autoplay loop />
    </div>
  );
}
