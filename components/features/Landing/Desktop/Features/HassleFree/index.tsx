import * as styles from "./HassleFree.module.scss";

export default function HassleFree() {
  return (
    <div className={styles.container}>
      <img src="/hasslefree-desktop.png" alt="" className={styles.bg} />
      <div style={{ marginRight: "200px" }}>
        <h2 className={styles.title}>
          <span>Use your money</span>
          <span>hassle free</span>
        </h2>
        <p className={styles.description}>with UPI & debit card</p>
      </div>
    </div>
  );
}
