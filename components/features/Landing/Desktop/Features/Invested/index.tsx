import * as styles from "./Invested.module.scss";

export default function Invested() {
  return (
    <div className={styles.container}>
      <img src="/desktop/bg-invested.png" alt="" className={styles.bg} />
      <h2 className={styles.title}>
        <span>Use your money</span>
        <span>hassle free</span>
      </h2>
      <p className={styles.description}>with UPI & debit card</p>
      <img src="/desktop/img-invested.png" alt="" className={styles.img} />
    </div>
  );
}
