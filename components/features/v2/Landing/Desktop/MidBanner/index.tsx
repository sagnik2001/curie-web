import dynamic from "next/dynamic";
import styles from "./MidBanner.module.scss"
import { useEffect, useRef, useState } from "react";
import { secondaryFont } from "@utilities/font";
import clsx from "clsx";
import CompareHighlighter from "@svgs/compare/Highlighter.svg"
import useOnScreen from "@hooks/useOnScreen";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type DataProp = {
    heading1 : string; 
    heading2 : string;
    img : string;
}

const ImgComponent = ({data} : {data : DataProp}) => {
    const {heading1="",heading2="",img=""} = data ?? {}
    return(
         <div className={styles.box}>
            <div className={styles.header}>
              <span>{heading1}</span>
              <span>{heading2}</span>
            </div>
            <img src={img} alt="" className={styles.imgCtn}/>
         </div>
    )
}

const content = [
     {
        heading1 : 'Money grows in',
        heading2 : 'liquid funds',
        img : '/desktop/mid_banner_1.png'
     },
     {
        heading1 : 'Send or receive',
        heading2 : 'via UPI',
        img : '/desktop/mid_banner_2.png'
     }
]

const MidBanner = () => {

     const [animationData, setAnimationData] = useState(null);
      const ref = useRef<HTMLDivElement>(null);
             const isOnScreen = useOnScreen({
                  ref,
                  threshold: 0.15,
                  dontUpdateAfterIntersection: false,
                });
        useEffect(() => {
          fetch("/ta_da.json")
            .then((response) => response.json())
            .then((data) => setAnimationData(data));
        }, []);
    return(
       <div ref={ref} className={styles.container}>
          <div className={styles.animation}>
                   {isOnScreen && <Lottie loop autoPlay animationData={animationData} />}
                   </div>
                   <div className={clsx(styles.content,secondaryFont.className)}>
                      <div className={styles.heading}>
                      It all happens together
                      </div>
                   </div>
                   <div className={clsx(styles.imgContainer,secondaryFont.className)}>
                     {
                         content?.map((item,index) => {
                             return(
                                 <ImgComponent data={item} key={index}/>
                             )
                     })}
                   </div>
                   <div className={clsx(styles.subHeading,secondaryFont.className)}>
                   Isn’t that cool? The feeling is mutual
                   <div className={styles.highlighter}>
             <CompareHighlighter style={{height:'21px',width:'109px'}}/>
           </div>
                   </div>
       </div>
    )
}

export default MidBanner