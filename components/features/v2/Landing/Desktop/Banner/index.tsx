import RivePage from "@molecules/RivFiles";
import styles from "./Banner.module.scss"
import { secondaryFont } from "@utilities/font";
import clsx from "clsx";
import useOnScreen from "@hooks/useOnScreen";
import { useRef } from "react";

const BannerComp = () => {
     const ref = useRef<HTMLDivElement>(null);
        const isOnScreen = useOnScreen({
             ref,
             threshold: 0.15,
             dontUpdateAfterIntersection: false,
           });
    return (
      <div ref={ref} className={styles.container}>
       {isOnScreen && <RivePage file="/how.riv" customStyles={{ width: '110px', height: '79px' }}/>}
       <div className={clsx(styles.content,secondaryFont.className)}>
            <div className={styles.heading}>
                <span>Your bank balance</span>
                <span>multiplies in a mutual fund</span>
            </div>
            <div className={styles.subContent}>
            while your UPI payments stay hassle-free
            </div>
       </div>
            <img src="/desktop/radient_background.png" alt="" className={styles.img4}/>
       <div className={styles.imgContainer}>
       
        <div>
            <img src="/desktop/phone_svg_2.png" alt="" className={styles.img2}/>
           </div>
           <div>
            <img src="/desktop/phone_svg_1.png" alt="" className={styles.img1}/>
           </div>
           <div>
            <img src="/desktop/phone_svg_3.png" alt="" className={styles.img3}/>
           </div>
           </div>
      </div>
    )
}

export default BannerComp; 