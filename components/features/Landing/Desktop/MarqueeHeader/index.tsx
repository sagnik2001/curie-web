import { calson } from "@utilities/font"
import styles from "./Marquee.module.scss"
import { HorizontalTicker } from "react-infinite-ticker";



const MarqueeHeader = ({isMobile=""}) => {
    return (
        <div className={`${isMobile!=="mobile" ? styles.marqueeContainer : styles.mobileMarqueeContainer}`} >
    <div className={ `${isMobile!=='mobile' ? styles.marqueeContent : styles.mobileMarqueeContent} ${calson.className}`}>
 
   <div className={`${isMobile==='mobile' ? styles.marqueeMobileInnerContent : styles.marqueeInnerContent}`}>
                  
              
                <HorizontalTicker duration={100000}>
                <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </HorizontalTicker>
      </div>
    </div>
    
  </div>
    )
}

export default MarqueeHeader