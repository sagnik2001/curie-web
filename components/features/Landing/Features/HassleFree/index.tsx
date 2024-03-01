import * as styles from "./HassleFree.module.scss";

export default function HassleFree() {
  return (
    <div className={styles.container}>
      <img src="/hasslefree.png" alt="" className={styles.img} />
      <h2 className={styles.title}>
        <span>Use your money</span>
        <span>hassle free</span>
      </h2>
      <p className={styles.description}>with UPI & debit card</p>
    </div>
  );
}
