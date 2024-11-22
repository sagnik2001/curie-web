import clsx from "clsx";
import * as styles from "./Invested.module.scss";

export default function Invested() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
      <picture>
          
          <source
            src="BG.png"
            type="image/png"
            className={clsx(styles.bg)}
          />
          <img
            src="BG.png"
            alt=""
            className={clsx(styles.bg)}
          />
        </picture>
        <picture>
          <source
            srcSet="/invested.avif"
            type="image/avif"
            className={styles.img}
          />
          <source
            srcSet="/invested.webp"
            type="image/webp"
            className={styles.img}
          />
          <source
            srcSet="/invested.png"
            type="image/png"
            className={styles.img}
          />
          <img src="/invested.png" alt="" className={styles.img} />
        </picture>
        <div className={styles.titleContainer}>
        <h2 className={clsx(styles.title)}>
          <span>Instant UPI on
          </span>
          <span>mutual funds</span>
        </h2>
        <p
          className={clsx(
            styles.description,
          )}
        >
         Scan & Pay to your nearest merchant
        </p>
        <div className={styles.bankImg}>
          <img src="/bank.png" alt="bank" />
        </div>
        </div>
      </div>
    </div>
  );
}
