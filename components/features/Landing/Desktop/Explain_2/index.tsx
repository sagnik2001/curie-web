import styles from "./Explain_2.module.scss"
import ICICIBANK from "@svgs/explain-desktop/iciciBank.svg"
import YESBANK from "@svgs/explain-desktop/yesBank.svg"
import NPCLBANK from "@svgs/explain-desktop/npcl.svg"
import Features from "../Features"

const Explain_Comp = () => {
    return (
        <>
       <div className={styles.container}>
        <div className={styles.txtCtn}>
         <div className={styles.txt}>
         It’s India's first <span>high-yield neo-bank</span> that helps you earn more returns than a traditional bank account by keeping your<span> money invested in fixed income Mutual Funds.</span>
         </div>
         <div className={styles.txt}>
         And the best part is you can<span> spend it anytime via UPI on Curie</span> directly.
         </div>
         </div>
         <div className={styles.bankImg}>
           <YESBANK/>
           <ICICIBANK/>
           <NPCLBANK/>
         </div>
       </div>
       <Features/>
       </>
    )
}

export default Explain_Comp