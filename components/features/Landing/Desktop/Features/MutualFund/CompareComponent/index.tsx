import styles from "./CompareComponent.module.scss"
import buttonStyles from "../../../../../../molecules/Navbar/Navbar.module.scss"
import { calson } from "@utilities/font"
const CompareComponent = () => {
    return(
        <div className={styles.container}>
            <div className={styles.containerHeading}>
            Compare how much you would have earned last year with <span>curie save</span>.
                </div>   
                <div className={buttonStyles.btn}>
            <a className={calson.className}>
              <span>Compare Now!</span>
            </a>
          </div> 
        </div>
    )
}

export default CompareComponent