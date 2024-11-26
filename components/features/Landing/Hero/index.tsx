import { calson } from "@utilities/font";
import * as styles from "./Hero.module.scss";
import ScrollSvg from "@svgs/scroll.svg";
import clsx from "clsx";
import Ornament1 from "@svgs/hero/ornament1.svg";
import Ornament2 from "@svgs/hero/ornament2.svg";
import Ornament3 from "@svgs/hero/ornament3.svg";
import Ornament4 from "@svgs/hero/ornament4.svg";
import Ornament5 from "@svgs/hero/ornament5.svg";
import Ornament6 from "@svgs/hero/ornament6.svg";
import Ornament7 from "@svgs/hero/ornament7.svg";
import { useEffect, useRef, useState } from "react";
import Navbar from "@molecules/Navbar";
import IntroductionBand from "./IntroductionBand";

export default function Hero() {
  const [loadAnimation, setLoadAnimation] = useState(false);
  const bgRef = useRef<HTMLSourceElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    setTimeout(() => {
      setLoadAnimation(true);
    }, 500);
  }, []);
  return (
    <div className={styles.box}>
      <Navbar className={styles.nav} />
      {/* <picture>
        <source
          srcSet="/bg-top-1.avif"
          type="image/avif"
          className={styles.bg}
        />
        <source
          srcSet="/bg-top-1.webp"
          type="image/webp"
          className={styles.bg}
        />
        <source srcSet="/bg-top-1.png" type="image/png" className={styles.bg} /> */}
        <img src="/bg-top-1.png" alt="" className={styles.bg} />
      {/* </picture> */}
      <div  className={styles.container}>
        <Ornament1
          className={clsx(
            styles.ornament1,
            loadAnimation && styles.animateOrnament1,
            loadAnimation && styles.float
          )}
        />
        <Ornament2
          className={clsx(
            styles.ornament2,
            loadAnimation && styles.animateOrnament2,
            loadAnimation && styles.float
          )}
        />
        <Ornament3
          className={clsx(
            styles.ornament3,
            loadAnimation && styles.animateOrnament3,
            loadAnimation && styles.float
          )}
        />
        <Ornament4
          className={clsx(
            styles.ornament4,
            loadAnimation && styles.animateOrnament4,
            loadAnimation && styles.ornamentfloat4
          )}
        />
        <Ornament5
          className={clsx(
            styles.ornament5,
            loadAnimation && styles.animateOrnament5,
            loadAnimation && styles.ornamentfloat5
          )}
        />
        <Ornament6
          className={clsx(
            styles.ornament6,
            loadAnimation && styles.animateOrnament6,
            loadAnimation && styles.float
          )}
        />
        <Ornament7
          className={clsx(
            styles.ornament7,
            loadAnimation && styles.animateOrnament7,
            loadAnimation && styles.float
          )}
        />
         
     
        <div
          className={clsx(styles.titleBox, loadAnimation && styles.animatedBox)}
        >
          <img src="/hero-mobile.png" alt="hero-img" />
        </div>
      
      </div>
    </div>
  );
}


/*
import { calson } from "@utilities/font";
import * as styles from "./Hero.module.scss";
import clsx from "clsx";
import ScrollSvg from "@svgs/scroll.svg";
import Ornament1 from "@svgs/desktop-hero/ornament1.svg";
import Ornament2 from "@svgs/desktop-hero/ornament2.svg";
import Ornament3 from "@svgs/desktop-hero/ornament3.svg";
import Ornament4 from "@svgs/desktop-hero/ornament4.svg";
import Ornament5 from "@svgs/desktop-hero/ornament5.svg";
import Ornament6 from "@svgs/desktop-hero/ornament6.svg";
import Ornament7 from "@svgs/desktop-hero/ornament7.svg";
import Ornament8 from "@svgs/desktop-hero/ornament8.svg";
import { useEffect, useRef, useState } from "react";
import usePauseAnimation from "@hooks/usePauseAnimation";
import IntroductionBanner from "./IntroductionBanner";
import Navbar from "@molecules/Navbar";

export default function Hero() {
  const [loadAnimation, setLoadAnimation] = useState(false);
  const bgRef = useRef<HTMLSourceElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
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
        /> *
        // <img src="/desktop/bg-hero.png" alt="" className={styles.bg} />
      {/* </picture> */
      {/* <Ornament1
        className={clsx(
          styles.ornament1,
          loadAnimation && styles.float,
          loadAnimation && styles.animateOrnament1
        )}
        id="hero-desktop-ornament1"
      /> 
      <div className={styles.container}>
        <Ornament2
          className={clsx(
            styles.ornament2,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament2
          )}
          id="hero-desktop-ornament2"
        />
        <Ornament3
          className={clsx(
            styles.ornament3,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament3
          )}
          id="hero-desktop-ornament3"
        />
        <Ornament5
          className={clsx(
            styles.ornament5,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament5
          )}
          id="hero-desktop-ornament5"
        />
        <Ornament4
          className={clsx(
            styles.ornament4,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament4
          )}
          id="hero-desktop-ornament4"
        />
        <Ornament6
          className={clsx(
            styles.ornament6,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament6
          )}
          id="hero-desktop-ornament6"
        />
        <Ornament7
          className={clsx(
            styles.ornament7,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament7
          )}
          id="hero-desktop-ornament7"
        />
        <Ornament8
          className={clsx(
            styles.ornament8,
            loadAnimation && styles.float,
            loadAnimation && styles.animateOrnament8
          )}
          id="hero-desktop-ornament8"
       
      </div>
    </div>
  );
}

*/}