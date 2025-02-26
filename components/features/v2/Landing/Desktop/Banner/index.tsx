import RivePage from "@molecules/RivFiles";
import styles from "./Banner.module.scss"
import { secondaryFont } from "@utilities/font";
import clsx from "clsx";
import useOnScreen from "@hooks/useOnScreen";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

let ScrollTrigger;

const BannerComp = () => {
     const ref = useRef<HTMLDivElement>(null);
        const isOnScreen = useOnScreen({
             ref,
             threshold: 0.35,
             dontUpdateAfterIntersection: true,
           });
           

           const [isGsapReady, setIsGsapReady] = useState(false);

           useEffect(() => {
             (async () => {
               const mod = await import("gsap/ScrollTrigger");
               ScrollTrigger = mod.ScrollTrigger;
               gsap.registerPlugin(ScrollTrigger);
               setIsGsapReady(true);
             })();
           }, []);

           useEffect(() => {
               // Remove on-screen checks so the scroll-based effect happens naturally
                if (!isGsapReady && !isOnScreen) return;
            
               // Create a timeline that spans from when the container enters
               // the viewport bottom (start) to when it leaves the viewport top (end).
                const tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: ref.current,
                    start: "top bottom", // when the top of .container hits bottom of viewport
                    end: "bottom top",   // when the bottom of .container hits top of viewport
                    scrub: true,         // ties the animation progress to scroll position
                  },
                });
            
               // Images will move from y=200 (off the bottom) to y=0
               // If you want a more or less dramatic movement, adjust the y values
                tl.fromTo(
                  ".Banner_img1__zFmiA",
                  { y: "100%" },
                  { y: 0, duration: 0.2, ease: "power2.out"  }
                ).fromTo(
                  ".Banner_img2__3aYBB",
                  { y: "100%" },
                  { y: 0, duration: 0.2, ease: "power2.out", stagger: 0.2  },
                  0 // overlap with previous; or delay if you prefer
                ).fromTo(
                  ".Banner_img3__nYF47",
                  { y: "100%" },
                  { y: 0, duration: 0.2, ease: "power2.out", stagger: 0.2  },
                  0
                );
              }, [isGsapReady,isOnScreen]);

        //    useEffect(() => {
        //        if (isOnScreen) {
        //            const tl = gsap.timeline();
           
        //            // Animate img1 first (moves up from translateY)
        //            tl.fromTo(
        //                ".Banner_img1__zFmiA",
        //                { y: "100%" }, // Starts 100% below
        //                { y: "0%", duration: 1.5, ease: "power2.out" }
        //            );
           
        //            // Animate img2 & img3 together with a slight delay
        //            tl.fromTo(
        //                [".Banner_img2__3aYBB", ".Banner_img3__nYF47"],
        //                { y: "100%" }, // Starts 100% below
        //                { y: "0%", duration: 1.5, ease: "power2.out", stagger: 0.2 }
        //            );
        //        }
        //    }, [isOnScreen]);
           
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

