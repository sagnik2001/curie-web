import React, { useEffect, useRef, useState } from "react";
import styles from "./Banks.module.scss"
import ICICIBank from "@svgs/features-desktop/icici.svg"
import AMFEBank from "@svgs/features-desktop/amfe.svg"
import NPCLBank from "@svgs/features-desktop/npcl.svg"
import PCIBank from "@svgs/features-desktop/pci.svg"
import SEBIBank from "@svgs/features-desktop/sebi.svg"
import YESBank from "@svgs/features-desktop/yesbank.svg"
import clsx from "clsx";
import useOnScreen from "@hooks/useOnScreen";

const Banks = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false); 
    const [floatOrnaments, setFloatOrnamanents] = useState(false);
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
    return(
      <div ref={ref} className={styles.container}>
        <PCIBank  className={clsx(
            styles.ornament1,
            animate && styles.slideInWithDelay
          )}/>
        <NPCLBank className={clsx(
            styles.ornament2,
            animate && styles.slideIn
          )}/>
        <YESBank className={clsx(
            styles.ornament3,
            animate && styles.slideInWithDelay
          )}/>
        <ICICIBank className={clsx(
            styles.ornament4,
            animate && styles.slideRightWithDelay
          )}/>
        <SEBIBank className={clsx(
            styles.ornament5,
            animate && styles.slideRight
          )}/>
        <AMFEBank className={clsx(
            styles.ornament6,
            animate && styles.slideRightWithDelay
          )}/>
        <div className={styles.content}>
        <h1 className={animate && styles.slideUp}>Your money is
        always safe 
        </h1>
        <span className={animate && styles.slideUpWithDelay}>
        with our  partnered Bank and AMC
        </span>
        </div>
      </div>
    ) 
}

export default Banks