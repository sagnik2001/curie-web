import RivePage from "@molecules/RivFiles";
import styles from "./Banner.module.scss"
import { secondaryFont } from "@utilities/font";
import clsx from "clsx";
import useOnScreen from "@hooks/useOnScreen";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const BannerComp = () => {
    const ref = useRef<HTMLDivElement>(null);
     const isOnScreen = useOnScreen({
             ref,
             threshold: 0.15,
             dontUpdateAfterIntersection: false,
           });

           useEffect(() => {
               if (isOnScreen) {
                   const tl = gsap.timeline();
           
                   // Animate img1 first (moves up from translateY)
                   tl.fromTo(
                       ".Banner_img1__wRtU7",
                       { y: "100%" }, // Starts 100% below
                       { y: "0%", duration: 0.6, ease: "power2.out" }
                   );
           
                   // Animate img2 & img3 together with a slight delay
                   tl.fromTo(
                       [".Banner_img2__CM2uG", ".Banner_img3__fuVzX"],
                       { y: "100%" }, // Starts 100% below
                       { y: "0%", duration: 0.7, ease: "power2.out", stagger: 0.2 }
                   );
               }
           }, [isOnScreen]);
           
    return (
      <div ref={ref} className={styles.container}>
       {isOnScreen && <RivePage file="/how.riv" customStyles={{ width: '55px', height: '40px' }}/>}
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
       {isOnScreen && <div className={styles.imgContainer}>
       
        <div>
            <img src="/desktop/phone_svg_2.png" alt="" className={styles.img2}/>
           </div>
           <div>
            <img src="/desktop/phone_svg_1.png" alt="" className={styles.img1}/>
           </div>
           <div>
            <img src="/desktop/phone_svg_3.png" alt="" className={styles.img3}/>
           </div>
           </div>}
      </div>
    )
}

export default BannerComp; 

