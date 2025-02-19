
import styles from "./Compare.module.scss"
import clsx from "clsx";
import { calson, secondaryFont } from "@utilities/font";
import CompareHighlighter from "@svgs/compare/Highlighter.svg"
import RebitSvg from "@svgs/compare/Rebit.svg"
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import useOnScreen from "@hooks/useOnScreen";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


const CompareComp = () => {
   const [animationData, setAnimationData] = useState(null);
       const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen({
         ref,
         threshold: 0.15,
         dontUpdateAfterIntersection: false,
       });
    useEffect(() => {
      fetch("/compare.json")
        .then((response) => response.json())
        .then((data) => setAnimationData(data));
    }, []);
    return (
       <div ref={ref} className={styles.wrapper}>
        <div className={styles.animation}>
         {isOnScreen && <Lottie animationData={animationData} />}
         </div>
         <div className={clsx(styles.textField,secondaryFont.className)}>
           <span>
           Your last year gains
           </span>
           <span className={styles.textBold}>
           with Curie
           <div className={styles.highlighter}>
             <CompareHighlighter/>
           </div>
           </span>
         </div>
         <div className={clsx(styles.header,secondaryFont.className)}>
                    <span>Feel the difference in your gains using</span>
                    <span>Account Aggregator (AA).</span>
                </div>
         <div className={styles.flexWrapper}>
            <div className={styles.textWrapper}>
               <div className={clsx(styles.subHeading,secondaryFont.className)}>
               Know how we calculate your projected gains {'>>'}
               </div>
               <div className={styles.subTextContainer}>
                  <div className={styles.subTextWrapper}>
                  <RebitSvg/>
                  <span className={clsx(styles.subText,secondaryFont.className)}>
                  : Your data is 100% safe & secure
                  </span>
                  </div>
                    <div className={styles.btn} onClick={() => console.log("hi")}>
                              <a className={calson.className}>
                                <span>compare now</span>
                              </a>
                            </div>
               </div>
            </div>
            <div className={styles.imageWrapper}>
                <img src="/comparator.png" alt="compare" />
            </div>
         </div>
       </div>
    )
}

export default CompareComp;






