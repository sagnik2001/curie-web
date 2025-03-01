import { calson, secondaryFont } from "@utilities/font";
import * as styles from "./Hero.module.scss";
import clsx from "clsx";
import ScrollSvg from "@svgs/scroll.svg";

import Ornament2 from "@svgs/hero/new-ornament2.svg";
import Cloud1 from "@svgs/desktop-hero/cloud1.svg";
import Cloud2 from "@svgs/desktop-hero/cloud2.svg";
import Ornament5 from "@svgs/hero/new-ornament1.svg";

import { useEffect, useRef, useState } from "react";
import usePauseAnimation from "@hooks/usePauseAnimation";
import Navbar from "@molecules/Navbar";
import RivePage from "@molecules/RivFiles";
import useOnScreen from "@hooks/useOnScreen";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


export default function Hero() {
  const [loadAnimation, setLoadAnimation] = useState(false);
  const bgRef = useRef<HTMLSourceElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
   const [animationData, setAnimationData] = useState(null);
         const ref = useRef<HTMLDivElement>(null);
      const isOnScreen = useOnScreen({
           ref,
           threshold: 0.15,
           dontUpdateAfterIntersection: false,
         });
      useEffect(() => {
        fetch("/subText.json")
          .then((response) => response.json())
          .then((data) => setAnimationData(data));
      }, []);
  usePauseAnimation(bgRef);
  usePauseAnimation(textRef);
  usePauseAnimation(paraRef);

  useEffect(() => {
    setTimeout(() => {
      setLoadAnimation(true);
    }, 500);
    const ornament1 = document.getElementById("hero-desktop-ornament1");
    const ornament2 = document.getElementById("hero-desktop-ornament2");
    const ornament3 = document.getElementById("hero-desktop-ornament3");
    const ornament4 = document.getElementById("hero-desktop-ornament4");
    const ornament5 = document.getElementById("hero-desktop-ornament5");
    const ornament6 = document.getElementById("hero-desktop-ornament6");
    const ornament7 = document.getElementById("hero-desktop-ornament7");
    const ornament8 = document.getElementById("hero-desktop-ornament8");
    window.addEventListener("focus", () => {
      if (ornament1) ornament1.style.animationPlayState = "paused";
      if (ornament2) ornament2.style.animationPlayState = "paused";
      if (ornament3) ornament3.style.animationPlayState = "paused";
      if (ornament4) ornament4.style.animationPlayState = "paused";
      if (ornament5) ornament5.style.animationPlayState = "paused";
      if (ornament6) ornament6.style.animationPlayState = "paused";
      if (ornament7) ornament7.style.animationPlayState = "paused";
      if (ornament8) ornament8.style.animationPlayState = "paused";
    });

    window.addEventListener("blur", () => {
      if (ornament1) ornament1.style.animationPlayState = "running";
      if (ornament2) ornament2.style.animationPlayState = "running";
      if (ornament3) ornament3.style.animationPlayState = "running";
      if (ornament4) ornament4.style.animationPlayState = "running";
      if (ornament5) ornament5.style.animationPlayState = "running";
      if (ornament6) ornament6.style.animationPlayState = "running";
      if (ornament7) ornament7.style.animationPlayState = "running";
      if (ornament8) ornament8.style.animationPlayState = "running";
    });
  }, []);
  return (
    <div className={styles.box}>
      <Navbar className={styles.nav} />
      {/* <picture>
        <source
          srcSet="/desktop/bg-hero.avif"
          type="image/avif"
          className={styles.bg}
          ref={bgRef}
        />
        <source
          srcSet="/desktop/bg-hero.webp"
          type="image/webp"
          className={styles.bg}
        />
        <source
          srcSet="/desktop/bg-hero.png"
          type="image/png"
          className={styles.bg}
        /> */}
      {/* </picture> */}
      {/* <Ornament1
        className={clsx(
          styles.ornament1,
          loadAnimation && styles.float,
          loadAnimation && styles.animateOrnament1
        )}
        id="hero-desktop-ornament1"
      /> */}
         <Ornament2
          className={clsx(
            styles.ornament2,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament2
          )}
          id="hero-desktop-ornament2"
        />

        <Ornament5
          className={clsx(
            styles.ornament5,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament5
          )}
          id="hero-desktop-ornament5"
        />
      <div ref={ref} className={styles.container}>
     
        <div className={clsx(styles.content,secondaryFont.className)}>
          <RivePage file="/India_only.riv" customStyles={{ width: '125px', height: '40px' }} />
          <div className={styles.heading} ref={textRef}>
            <span>
            UPI app that
            </span>
            <span>
            grows your money
            </span>
          </div>
          <div className={styles.paragraph}>
          Because growth is better than 
          <div className={styles.animation}>
                   {isOnScreen && <Lottie animationData={animationData} />}
                   </div>
          </div>
          <div className={styles.videoContainer}>
              <div className={styles.leftCloudStyles1}>
              <Cloud1 className={styles.cloud1}/>
              </div>
              <div className={styles.rightCloudStyles1}>
                <Cloud2 className={styles.cloud2}/>
              </div>
            <video muted autoPlay loop  playsInline className={styles.video}>
              <source src="/hero_bg.mp4" type="video/mp4" />
              <source src="/hero_bg.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
