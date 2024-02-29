import * as styles from "./Safe.module.scss";

export default function Safe() {
  return (
    <div className={styles.container}>
      <img src="/bg-feature-2.png" alt="" className={styles.bg} />
      <h2 className={styles.title}>
        <span>Your money is</span>
        <span>always safe</span>
      </h2>
      <p className={styles.description}>with our licensed Bank and AMC</p>
      <img src="/mobile-feature-3.png" alt="" className={styles.img} />
    </div>
  );
}
