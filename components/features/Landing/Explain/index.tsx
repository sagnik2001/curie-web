import styles from "./Explain.module.scss"
import ICICIBANK from "@svgs/explain-mobile/icici.svg"
import YESBANK from "@svgs/explain-mobile/yesBank.svg"
import NPCL from "@svgs/explain-mobile/npci.svg"
import Features from "../Features"

const Explain_Comp = () => {
    return (
        <>
       <div className={styles.container}>
        <div className={styles.txtCtn}>
         <div className={styles.txt}>
         Curie save is a <span>high-yield bank account</span> which combines the flexibility of a bank and the <span>growth from mutual funds</span>. Money stays in mutual fund, while you spend directly from <span>UPI or debit card</span>.
         </div>
         <div className={styles.txtspan}>
         Let your money work for you!
         </div>
         </div>
         <div>
         <div className={styles.bankImg}>
           <YESBANK className={styles.img}/>
           <ICICIBANK className={styles.img}/>
           {/* <YESBANK className={styles.img}/> */}
         </div>
         <div>
            <NPCL className={styles.img}/>
         </div>
         </div>
       </div>
       <Features/>
       </>
    )
}

export default Explain_Comp