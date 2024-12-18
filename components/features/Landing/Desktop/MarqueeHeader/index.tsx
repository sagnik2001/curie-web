import { calson } from "@utilities/font"
import styles from "./Marquee.module.scss"

const MarqueeHeader = ({isMobile=""}) => {
    return (
        <div className={`${!isMobile ? styles.marqueeContainer : styles.mobileMarqueeContainer}`} >
    <div className={ `${!isMobile ? styles.marqueeContent : styles.mobileMarqueeContent} ${calson.className}`}>
    <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <span>We announced our funding!&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </div>
  </div>
    )
}

export default MarqueeHeader