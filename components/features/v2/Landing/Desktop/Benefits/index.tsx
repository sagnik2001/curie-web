

import { useEffect, useRef, useState } from "react";
import styles from "./Benefits.module.scss";
import useOnScreen from "@hooks/useOnScreen";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { secondaryFont } from "@utilities/font";
import Ornament2 from "@svgs/desktop-hero/new-ornament-1.svg";
import Ornament5 from "@svgs/desktop-hero/new-ornament-2.svg";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

let ScrollTrigger : any;

const BenefitsComp = () => {
    const [animationData, setAnimationData] = useState(null);
    const [loadAnimation, setLoadAnimation] = useState(false);
    const [isGsapReady, setIsGsapReady] = useState(false);


      useEffect(() => {
        (async () => {
          const mod = await import("gsap/ScrollTrigger");
          ScrollTrigger = mod.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);
          setIsGsapReady(true);
        })();
      }, []);

    const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen({
        ref,
        threshold: 0.15,
        dontUpdateAfterIntersection: false,
    });

    useEffect(() => {
        setTimeout(() => {
          setLoadAnimation(true);
        }, 500);
        const ornament2 = document.getElementById("hero-desktop-ornament2");

        const ornament5 = document.getElementById("hero-desktop-ornament5");

        window.addEventListener("focus", () => {
          if (ornament2) ornament2.style.animationPlayState = "paused";
          if (ornament5) ornament5.style.animationPlayState = "paused";

        });
    
        window.addEventListener("blur", () => {
          if (ornament2) ornament2.style.animationPlayState = "running";
          if (ornament5) ornament5.style.animationPlayState = "running";

        });
      }, []);

    useEffect(() => {
        fetch("/magical.json")
            .then((response) => response.json())
            .then((data) => setAnimationData(data));
    }, []);

    useEffect(() => {
        if (isOnScreen) {
            gsap.fromTo(
                ".progress-container",
                { width: "0%" }, // Starts from zero width
                { width: "720px", duration: 1.5, ease: "power2.out" , onUpdate: () => {
                    gsap.set(".inflation", { clearProps: "all" }); // Keeps inflation unaffected
                }}
            );
        }
    }, [isOnScreen]);

  useGSAP(
      () => {
        if (!isGsapReady || !ScrollTrigger) return; // Ensure GSAP is ready
  
        
  gsap.fromTo(
    ".ornament_2",
    { y: 300 },
    {
      y: 0,
      scrollTrigger: {
        trigger: ".ornament_2",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        pinType: "transform",
        pinSpacing: false,
  
      },
    }
  );
  gsap.fromTo(
    ".ornament_5",
    { y: 300 },
    {
      y: 0,
      scrollTrigger: {
        trigger: ".ornament_5",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        pinType: "transform",
        pinSpacing: false,
  
      },
    }
  );
  
    
      },
      { scope: ref, dependencies: [isGsapReady] } // Add isGsapReady as a dependency
    );

    useEffect(() => {
        if (isOnScreen) {
            gsap.fromTo(
                ".progress-img-container",
                { width: "0%" }, // Starts from zero width
                { width: "720px", duration: 1.5, ease: "power2.out" }
            );
        }
    }, [isOnScreen]);

    useEffect(() => {
        if (isOnScreen) {
            gsap.fromTo(
                ".progress-container-2",
                { width: "0%" }, // Starts from zero width
                { width: "250px", duration: 1.5, ease: "power2.out"}
            );
        }
    }, [isOnScreen]);

    useEffect(() => {
        if (isOnScreen) {
            gsap.fromTo(
                ".progress-img-container-2",
                { width: "0%" }, // Starts from zero width
                { width: "250px", duration: 1.5, ease: "power2.out" }
            );
        }
    }, [isOnScreen]);

    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.hideBorder} />
            <Ornament2
          className={clsx(
            styles.ornament2,
            'ornament_2'
          )}
          id="hero-desktop-ornament2"
        />

        <Ornament5
          className={clsx(
            styles.ornament5,
            'ornament_5'
          )}
          id="hero-desktop-ornament5"
        />
            <div className={styles.mainContent}>
                <div className={styles.animation}>
                    {isOnScreen && <Lottie animationData={animationData} />}
                </div>
                <div className={clsx(styles.content, secondaryFont.className)}>
                    <div className={clsx(styles.heading, secondaryFont.className)}>
                        <span>Up to 3x returns on your</span>
                        <span>bank account</span>
                    </div>
                    <div className={styles.subContent}>
                        Savings account fixed! Forever.
                    </div>
                    {(
                        <div className={clsx(styles.progress_bar_container, "progress-container")}>
                            <img className={clsx(styles.progress_image,"progress-img-container")} src="/desktop/benefit_banner.png" alt="Progress" />
                            <div className={styles.number}>7.3%</div>
                            <div className={styles.inflation}>
                       <img src="/desktop/inflation.png" alt="Inflation" className={styles.inflation_img}/>
                    </div>
                        </div>
                    )}
                    <div className={styles.banner_2}>
                       <div className={clsx(styles.progress_bar_container_2, "progress-container-2")}>
                            <img className={clsx(styles.progress_image,"progress-img-container-2")} src="/desktop/benefits_banner_2.png" alt="Progress" />
                            <div className={styles.number}>~2.5%</div>
                        </div>
                        <div className={styles.banner_2_fixed}>

                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default BenefitsComp;
