import { useEffect, useRef, useState } from "react";
import styles from "./Benefits.module.scss"
import useOnScreen from "@hooks/useOnScreen";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


const BenefitsComp = () => {
    const [animationData, setAnimationData] = useState(null);
           const ref = useRef<HTMLDivElement>(null);
        const isOnScreen = useOnScreen({
             ref,
             threshold: 0.15,
             dontUpdateAfterIntersection: false,
           });
        useEffect(() => {
          fetch("/magical.json")
            .then((response) => response.json())
            .then((data) => setAnimationData(data));
        }, []);
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.animation}>
                 {isOnScreen && <Lottie animationData={animationData} />}
                 </div>
      </div>
    )
}

export default BenefitsComp