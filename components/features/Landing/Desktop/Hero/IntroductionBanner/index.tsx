import clsx from "clsx";
import * as styles from "./IntroductionBanner.module.scss";
import Explain_Comp from "../../Explain_2";
import { useEffect, useState } from "react";

export default function IntroductionBanner() {
  const [paddingTop, setPaddingTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxPadding = 150; // Maximum padding-top limit
      const scrollFactor = 0.1; // 5px increase for every 10px scroll

      // Calculate new padding-top based on scrollY
      const newPadding = Math.min(window.scrollY * scrollFactor, maxPadding);

      setPaddingTop(newPadding); // Update padding state
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerStyle = {
    paddingTop: `${paddingTop}px`, // Dynamically adjust padding
  };

  return (
    <div id="hero-section" className={styles.container} style={containerStyle}>
      <div className={clsx(!paddingTop && styles.animationContent,
          styles.normalContent
      )}>
        <img
          className={styles.headingImg}
          src="/desktop/curie_save.png"
          alt="curie-save"
        />
        <div className={styles.subHeading}>
          <span>The supercharged savings account</span>
        </div>
      </div>
      <div className={styles.ctnBg}>
        <img
          className={styles.curieGraph}
          src="/desktop/curie-graph.png"
          alt="curie-graph"
        />
        <Explain_Comp />
      </div>
    </div>
  );
}
