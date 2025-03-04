import React, { useEffect, useRef, useState } from "react";
import styles from "./Banks.module.scss";
import clsx from "clsx";
import useOnScreen from "@hooks/useOnScreen";
import { secondaryFont } from "@utilities/font";
import dynamic from "next/dynamic";
import CustomRivPage from "./CustomRivComp";
import gsap from "gsap";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

let ScrollTrigger;

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

    const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isGsapReady, setIsGsapReady] = useState(false);

  useEffect(() => {
    (async () => {
      const mod = await import("gsap/ScrollTrigger");
      ScrollTrigger = mod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      setIsGsapReady(true);
    })();
  }, []);

  const customStyles = isSmallScreen
    ? { width: '120px', height: '120px' }
    : { width: '180px', height: '185px' };

  

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
         ".ornament4",
         { y: "1000px" },
         { y: "-65%", duration: 0.5, ease: "power4.out"  }
       );
       tl.fromTo(
        ".ornament1",
        { y: "1000px" },
        { y: "-65%", duration: 0.5, ease: "power4.out"  },
        0
      );
       tl.fromTo(
         ".ornament2",
         { y:  "1000px"},
         { y: 0, duration: 0.5, ease: "power4.out", stagger: 0.2    },
         0 // overlap with previous; or delay if you prefer
       )
       tl.fromTo(
         ".ornament5",
         { y:  "1000px"},
         { y: 0, duration: 0.5, ease: "power4.out" , stagger: 0.2   },
         0
       )
       tl.fromTo(
        ".ornament6",
        { y:  "1000px"},
        { y: 0, duration: 0.5, ease: "power4.out", stagger: 0.4    },
        0 // overlap with previous; or delay if you prefer
      );
      tl.fromTo(
        ".ornament3",
        { y:  "1000px"},
        { y: 0, duration: 0.5, ease: "power4.out" , stagger: 0.4   },
        0
      )
       ;
     }, [isGsapReady,isOnScreen]);

  
    // useEffect(() => {
    //   if (isOnScreen) {
    //     // Delay the start so the animation triggers when the section is fully in view.
    //     setTimeout(() => {
    //       gsap.set(".bankContainer", { transformOrigin: "50% 0" });
    //       gsap.fromTo(
    //         ".bankContainer",
    //         { rotation: -30 }, // Reduced rotation angle
    //         {
    //           rotation: 0,
    //           duration: 2,
    //           ease: "power4.out",
    //         }
    //       );
    //     }, 400); // 500ms delay before starting the animation
    //   }
    // }, [isOnScreen]);

    // useEffect(() => {
    //   if (!isOnScreen) {
    //     // When the section leaves the viewport, animate the bank container
    //     // with a pivot at the top left so it rotates and moves downward.
    //     gsap.set(".bankContainer", { transformOrigin: "0 0" });
    //     gsap.to(".bankContainer", {
    //       rotation: -30,
    //       y: 100, // adjust this value to control how far down it moves
    //       duration: 2,
    //       ease: "power4.out",
    //     });
    //   }
    // }, [isOnScreen]);
    
    
    
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
        <div className={styles.pendulumWrapper}>
          <div className={clsx(styles.bankContainer,'bankContainer')}>
              <div className={clsx(styles.ornament2,'ornament2', animate && styles.animateOrnament2)}>
              <CustomRivPage file="/lottiebanks/icici.riv" customStyles={customStyles}/>
              </div>
              <div className={clsx(styles.ornament5,'ornament5', animate && styles.animateOrnament5)}>
              <CustomRivPage file="/lottiebanks/amfi.riv" customStyles={customStyles}/>
              </div>
            
              <div className={clsx(styles.ornament6,'ornament6', animate && styles.animateOrnament6)}>
              <CustomRivPage file="/lottiebanks/npci.riv" customStyles={customStyles}/>
              </div>
              <div className={clsx(styles.ornament4,'ornament4')}>
              <CustomRivPage file="/lottiebanks/pcidss.riv" customStyles={customStyles}/>
              </div>
              <div className={clsx(styles.ornament3,'ornament3', animate && styles.animateOrnament3)}>
              <CustomRivPage file="/lottiebanks/bajaj.riv" customStyles={customStyles}/>
              </div>
              <div className={clsx(styles.ornament1,'ornament1')}>
              <CustomRivPage file="/lottiebanks/yes_bank.riv" customStyles={customStyles}/>
              </div>
              </div>
        </div>
      </div>
    );
};

export default Banks;
