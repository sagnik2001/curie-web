import * as styles from "./Safe.module.scss";

export default function Safe() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <picture>
          <source
            srcSet="/safe.avif"
            type="image/avif"
            className={styles.img}
          />
          <source
            srcSet="/safe.webp"
            type="image/webp"
            className={styles.img}
          />
          <source srcSet="/safe.png" type="image/png" className={styles.img} />
          <img src="/safe.png" alt="" className={styles.img} />
        </picture>
        <h2 className={styles.title}>
          <span>Your money is</span>
          <span>always safe</span>
        </h2>
        <p className={styles.description}>with our licensed Bank and AMC</p>
      </div>
    </div>
  );
}
