import * as styles from "./Invested.module.scss";

export default function Invested() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img src="/desktop/bg-invested.png" alt="" className={styles.bg} />
        <h2 className={styles.title}>
          <span>Stay invested</span>
          <span>all the time</span>
        </h2>
        <p className={styles.description}>with the convenience of bank</p>
        <img src="/desktop/img-invested.png" alt="" className={styles.img} />
      </div>
    </div>
  );
}
