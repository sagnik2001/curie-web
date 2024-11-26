import Ornament1 from "@svgs/invested-desktop/ornament1.svg";
import Ornament2 from "@svgs/invested-desktop/ornament2.svg";
import Ornament3 from "@svgs/invested-desktop/ornament3.svg";
import Ornament4 from "@svgs/invested-desktop/ornament4.svg";
import * as styles from "./MutualFund.module.scss";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "@hooks/useOnScreen";
import clsx from "clsx";
import CompareComponent from "./CompareComponent";
import { calson } from "@utilities/font";

export default function MutualFund() {
  const ref = useRef<HTMLDivElement>(null);
  const [floatOrnaments, setFloatOrnamanents] = useState(false);
  const [animate, setAnimate] = useState(false); 
  const isOnScreen = useOnScreen({
    ref,
    threshold: 0.15,
    dontUpdateAfterIntersection: false,
  });
  useEffect(() => {
    if (!isOnScreen || floatOrnaments) return;
    setTimeout(() => {
      setFloatOrnamanents(true);
    }, 800);
  }, [isOnScreen, floatOrnaments]);
  useEffect(() => {
    if (isOnScreen) {
      setAnimate(true); 
    } else {
      setAnimate(false); 
    }
  }, [isOnScreen]);
  return (
    <div className={styles.box} ref={ref}>
   
      <div className={styles.container}>
        <picture>
        
          <source
            src="/Graph.png"
            type="image/png"
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
          <img
            src="/Graph.png"
            alt=""
            className={clsx(styles.bg, isOnScreen && styles.finalBg)}
          />
        
        </picture>
        <div className={styles.graphContent}>
          You started your <span className={calson.className}>curie</span> journey
          </div>
        <div className={styles.contentContainer}>
     
     
        <div>
        <picture>
        
      
        <source
          src="/desktop/mutualFund.png"
          type="image/png"
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            animate && styles.slideRight
          )}
        />
        <img
          src="/desktop/mutualFund.png"
          alt=""
          className={clsx(
            styles.img,
            isOnScreen && styles.finalImg,
            animate && styles.slideRight
          )}
        />
      </picture>
     
        </div>
      </div>
       <div className={clsx(styles.titleContainer,animate && styles.slideIn)}>
        <h2 className={clsx(styles.title, isOnScreen && styles.finalTitle)}>
          <span>Make your money
          </span>
          <span>  work for you
          </span>
        </h2>
        <p
          className={clsx(
            styles.description,
            isOnScreen && styles.finalDescription
          )}
        >
         <span>Boost your savings with mutual fund backed</span>
         <span>savings account</span>
        </p>
        </div>
      </div>
    </div>
  );
}
