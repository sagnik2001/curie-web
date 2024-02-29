import * as styles from "./Invested.module.scss";

export default function Invested() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span>Stay invested</span>
        <span>all the time</span>
      </h2>
      <p className={styles.description}>with the convenience of bank</p>
      <img src="/mobile-feature.png" className={styles.mob} alt="" />
    </div>
  );
}
