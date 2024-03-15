import * as styles from "./HassleFree.module.scss";

export default function HassleFree() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <picture>
          <source
            srcSet="/hasslefree.avif"
            type="image/avif"
            className={styles.img}
          />
          <source
            srcSet="/hasslefree.webp"
            type="image/webp"
            className={styles.img}
          />
          <source
            srcSet="/hasslefree.png"
            type="image/png"
            className={styles.img}
          />
          <img src="/hasslefree.png" alt="" className={styles.img} />
        </picture>
        <h2 className={styles.title}>
          <span>Use your money</span>
          <span>hassle free</span>
        </h2>
        <p className={styles.description}>with UPI & debit card</p>
      </div>
    </div>
  );
}
