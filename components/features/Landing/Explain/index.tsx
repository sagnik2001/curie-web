import * as styles from "./Explain.module.scss";

export default function Explain() {
  return (
    <div className={styles.container}>
      <img src="/explain.png" alt="" className={styles.img} />
      <h2 className={styles.title}>
        <span>High yield</span>
        <span>savings account</span>
      </h2>
      <p className={styles.para}>
        <span>Zero balance account with</span>
        <span>no hidden fees</span>
      </p>
    </div>
  );
}
