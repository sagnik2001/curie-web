import styles from "./Explain_2.module.scss"
import ICICIBANK from "@svgs/explain-desktop/iciciBank.svg"
import YESBANK from "@svgs/explain-desktop/yesBank.svg"
import Features from "../Features"

const Explain_Comp = () => {
    return (
        <>
       <div className={styles.container}>
        <div className={styles.txtCtn}>
         <div className={styles.txt}>
         Curie save is a high-yield bank account which combines the flexibility of a bank and the growth from mutual funds. Money stays in mutual fund, while you spend directly from UPI or debit card.
         </div>
         <div className={styles.txt}>
         Let your money work for you!
         </div>
         </div>
         <div className={styles.bankImg}>
           <YESBANK/>
           <ICICIBANK/>
           <YESBANK/>
         </div>
       </div>
       <Features/>
       </>
    )
}

export default Explain_Comp