import * as styles from "./Explain.module.scss";

export default function Explain() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <picture>
          <source
            srcSet="/explain.avif"
            type="image/avif"
            className={styles.img}
          />
          <source
            srcSet="/explain.webp"
            type="image/webp"
            className={styles.img}
          />
          <source
            srcSet="/explain.png"
            type="image/png"
            className={styles.img}
          />
          <img src="/explain.png" alt="" className={styles.img} />
        </picture>

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
