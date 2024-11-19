import { calson } from "@utilities/font"
import styles from "./Marquee.module.scss"

const Marquee = ({isMobile=""}) => {
    return (
        <div className={`${!isMobile ? styles.marqueeContainer : styles.mobileMarqueeContainer}`} >
    <div className={ `${!isMobile ? styles.marqueeContent : styles.mobileMarqueeContent} ${calson.className}`}>
    <span>Make your money work for you&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <span>Make your money work for you&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <span>Make your money work for you&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <span>Make your money work for you&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </div>
  </div>
    )
}

export default Marquee