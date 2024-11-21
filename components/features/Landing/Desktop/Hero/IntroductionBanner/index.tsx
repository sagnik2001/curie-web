import clsx from "clsx";
import * as styles from "./IntroductionBanner.module.scss";
import { calson } from "@utilities/font";
import Explain_Comp from "../../Explain_2";

export default function IntroductionBanner() {
  return (
    <div className={styles.container}>
      <img className={styles.headingImg} src="/desktop/curie_save.png" alt="curie-save"/>
      <div className={styles.subHeading}>
        <span>
        The supercharged savings account
        </span>
        </div>
        <div className={styles.ctnBg}>  
          <img className={styles.curieGraph} src="/desktop/curie-graph.png" alt="curie-graph"/>
          <Explain_Comp/>
          </div>
    </div>
  );
}
