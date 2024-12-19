import { calson } from "@utilities/font"
import styles from "./Marquee.module.scss"
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";

interface HorizontalTickerProps {
  children: ReactNode;
  duration: number;
}

const HorizontalTicker = dynamic<HorizontalTickerProps>(() =>
  import("react-infinite-ticker").then((mod) => mod.HorizontalTicker), { ssr: false });

interface MarqueeHeaderProps {
  isMobile?: string;
}

const MarqueeHeader : React.FC<MarqueeHeaderProps> = ({isMobile=""}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
      setIsClient(true); // Ensures this runs only in the browser
  }, []);
    return (
        <div className={`${isMobile!=="mobile" ? styles.marqueeContainer : styles.mobileMarqueeContainer}`} >
    <div className={ `${isMobile!=='mobile' ? styles.marqueeContent : styles.mobileMarqueeContent} ${calson.className}`}>
 
   <div className={`${isMobile==='mobile' ? styles.marqueeMobileInnerContent : styles.marqueeInnerContent}`}>
                  
              
                {isClient && <HorizontalTicker duration={100000}>
                <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </HorizontalTicker>}
      </div>
    </div>
    
  </div>
    )
}

export default MarqueeHeader