import CompareJson from "@lottiecompare.json"
import Lottie from "lottie-react";
import styles from "./Compare.module.scss"
import clsx from "clsx";
import { calson, secondaryFont } from "@utilities/font";
import CompareHighlighter from "@svgs/compare/Highlighter.svg"
import RebitSvg from "@svgs/compare/Rebit.svg"

const CompareComp = () => {
    return (
       <div className={styles.wrapper}>
        <div className={styles.animation}>
         <Lottie animationData={CompareJson} />
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