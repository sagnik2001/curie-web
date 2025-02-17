import clsx from "clsx";
import * as styles from "./DownloadMobile.module.scss";
import { calson } from "@utilities/font";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


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
          "https://app.curie.money",
          "_blank"
        )
      }
    >
      <Lottie animationData={animationData} autoplay loop />
    </div>
  );
}
