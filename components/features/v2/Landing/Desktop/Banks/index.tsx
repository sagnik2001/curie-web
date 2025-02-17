import React, { useEffect, useRef, useState } from "react";
import styles from "./Banks.module.scss"
import ICICIBank from "@lottiebanks/icici.json"
import AMFEBank from "@lottiebanks/amfi.json"
import NPCLBank from "@lottiebanks/npci.json"
import PCIBank from "@lottiebanks/pci.json"
import BajajBank from "@lottiebanks/finserv.json"
import YESBank from "@lottiebanks/yesbank.json"
import clsx from "clsx";
import useOnScreen from "@hooks/useOnScreen";
import Lottie from "lottie-react";
import { secondaryFont } from "@utilities/font";

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
    const [SecuredJson, setAnimationData] = useState(null);
    useEffect(() => {
      fetch("/compare.json")
        .then((response) => response.json())
        .then((data) => setAnimationData(data));
    }, []);
    return(
      <div ref={ref} className={styles.container}>
        <div className={styles.animatingHeading}>
        <Lottie autoPlay animationData={SecuredJson} />
        </div>
        <div >
          <div className={clsx(styles.newContent,secondaryFont.className)}>
            <span>
            Your funds are
            </span>
            <span>
            always safe
            </span>
          </div>
          <div className={clsx(styles.subContent,secondaryFont.className)}>
          with our partner Bank and AMCs
          </div>
        </div>
        <div>
          <div className={styles.bankContainer}>
            <div className={clsx(styles.ornament2,animate && styles.animate)}>
              <Lottie animationData={ICICIBank} />
            </div>
            <div className={clsx(styles.ornament5,animate && styles.animate)}>
              <Lottie animationData={AMFEBank} />
            </div>
            <div className={clsx(styles.ornament6,animate && styles.animate)}>
              <Lottie animationData={NPCLBank} />
            </div>
            <div className={clsx(styles.ornament4,animate && styles.animate)}>
              <Lottie animationData={PCIBank} />
            </div>
            <div className={clsx(styles.ornament3,animate && styles.animate)}>
              <Lottie animationData={BajajBank} />
            </div>
            <div className={clsx(styles.ornament1,animate && styles.animate)}>
              <Lottie animationData={YESBank} />
            </div>
          </div>
        </div>
      </div>
    ) 
}

export default Banks