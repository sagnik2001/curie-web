import * as styles from "./Safe.module.scss";

export default function Safe() {
  return (
    <div className={styles.container}>
      <img src="/safe.png" alt="" className={styles.img} />
      <h2 className={styles.title}>
        <span>Your money is</span>
        <span>always safe</span>
      </h2>
      <p className={styles.description}>with our licensed Bank and AMC</p>
    </div>
  );
}
