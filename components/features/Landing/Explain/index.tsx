import * as styles from "./Explain.module.scss";

export default function Explain() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.img} />
        <h2 className={styles.title}>
          <span>High yield</span>
          <span>savings account</span>
        </h2>
        <ul className={styles.para}>
          <li>No hidden fees</li>
          <li>Enjoy higher returns</li>
        </ul>
      </div>
    </div>
  );
}
