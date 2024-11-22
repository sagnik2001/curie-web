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
    const [floatOrnaments, setFloatOrnamanents] = useState(false);
    const isOnScreen = useOnScreen({
      ref,
      threshold: 0.15,
      dontUpdateAfterIntersection: true,
    });
    useEffect(() => {
      if (!isOnScreen || floatOrnaments) return;
      setTimeout(() => {
        setFloatOrnamanents(true);
      }, 800);
    }, [isOnScreen, floatOrnaments]);
    return(
      <div className={styles.container}>
        <div className={styles.imgContainer}>
        <YESBank className={clsx(
            styles.ornament3,
            isOnScreen && styles.finalOrnament3,
            floatOrnaments && styles.float
          )}/>
           <PCIBank  className={clsx(
            styles.ornament1,
            isOnScreen && styles.finalOrnament1,
            floatOrnaments && styles.float
          )}/>
        </div>
       
        <NPCLBank className={clsx(
            styles.ornament2,
            isOnScreen && styles.finalOrnament2,
            floatOrnaments && styles.float
          )}/>
      
    
        
        <div className={styles.content}>
        <h1>Your money is
        always safe 
        </h1>
        <span>
        with our licensed Bank and AMC
        </span>
        </div>
        <SEBIBank className={clsx(
            styles.ornament5,
            isOnScreen && styles.finalOrnament5,
            floatOrnaments && styles.float
          )}/>
       
        <div className={styles.imgContainer_2}>
        <ICICIBank className={clsx(
            styles.ornament4,
            isOnScreen && styles.finalOrnament4,
            floatOrnaments && styles.float
          )}/>
           <AMFEBank className={clsx(
            styles.ornament6,
            isOnScreen && styles.finalOrnament6,
            floatOrnaments && styles.float
          )}/>
        </div>
      </div>
    ) 
}

export default Banks