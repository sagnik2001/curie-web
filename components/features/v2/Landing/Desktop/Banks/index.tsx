import React, { useEffect, useRef, useState } from "react";
import styles from "./Banks.module.scss";
import clsx from "clsx";
import useOnScreen from "@hooks/useOnScreen";
import { secondaryFont } from "@utilities/font";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


const Banks = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false); 
    const [floatOrnaments, setFloatOrnaments] = useState(false);
    const isOnScreen = useOnScreen({
      ref,
      threshold: 0.15,
      dontUpdateAfterIntersection: false,
    });

    useEffect(() => {
      if (!isOnScreen || floatOrnaments) return;
      setTimeout(() => {
        setFloatOrnaments(true);
      }, 800);
    }, [isOnScreen, floatOrnaments]);

    useEffect(() => {
      setAnimate(isOnScreen);
    }, [isOnScreen]);

    // Dynamically loading Lottie JSONs using fetch
    const [lottieData, setLottieData] = useState({
      secured: null,
      icici: null,
      amfi: null,
      npci: null,
      pci: null,
      bajaj: null,
      yesbank: null,
    });

    useEffect(() => {
      const loadLotties = async () => {
        try {
          const fetchLottie = async (path: string) => {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Failed to load ${path}`);
            return await response.json();
          };

          const [secured, icici, amfi, npci, pci, bajaj, yesbank] = await Promise.all([
            fetchLottie("/secured.json"),
            fetchLottie("/lottiebanks/icici.json"),
            fetchLottie("/lottiebanks/amfi.json"),
            fetchLottie("/lottiebanks/npci.json"),
            fetchLottie("/lottiebanks/pci.json"),
            fetchLottie("/lottiebanks/finserv.json"),
            fetchLottie("/lottiebanks/yesbank.json"),
          ]);

          setLottieData({ secured, icici, amfi, npci, pci, bajaj, yesbank });
        } catch (error) {
          console.error("Error loading Lottie animations:", error);
        }
      };

      loadLotties();
    }, []);

    console.log(animate,'anim')

    return (
      <div ref={ref} className={styles.container}>
     <img src="/desktop/banks_bg.png" alt="" className={styles.bg} />
      
        <div className={styles.animatingHeading}>
          {isOnScreen && lottieData.secured && <Lottie autoPlay animationData={lottieData.secured} />}
        </div>
        <div>
          <div className={clsx(styles.newContent, secondaryFont.className)}>
            <span>Your funds are</span>
            <span>always safe</span>
          </div>
          <div className={clsx(styles.subContent, secondaryFont.className)}>
            with our partner Banks and AMCs
          </div>
        </div>
        <div>
          <div className={styles.bankContainer}>
            {lottieData.icici && (
              <div className={clsx(styles.ornament2, animate && styles.animateOrnament2)}>
                <Lottie animationData={lottieData.icici} />
              </div>
            )}
            {lottieData.amfi && (
              <div className={clsx(styles.ornament5, animate && styles.animate)}>
                <Lottie animationData={lottieData.amfi} />
              </div>
            )}
            {lottieData.npci && (
              <div className={clsx(styles.ornament6, animate && styles.animate)}>
                <Lottie animationData={lottieData.npci} />
              </div>
            )}
            {lottieData.pci && (
              <div className={clsx(styles.ornament4, animate && styles.animate)}>
                <Lottie animationData={lottieData.pci} />
              </div>
            )}
            {lottieData.bajaj && (
              <div className={clsx(styles.ornament3, animate && styles.animate)}>
                <Lottie animationData={lottieData.bajaj} />
              </div>
            )}
            {lottieData.yesbank && (
              <div className={clsx(styles.ornament1, animate && styles.animate)}>
                <Lottie animationData={lottieData.yesbank} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Banks;
