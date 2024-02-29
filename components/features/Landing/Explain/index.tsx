import { animated, useSpring } from "@react-spring/web";
import * as styles from "./Explain.module.scss";
import Ornament1 from "@svgs/explain/ornament1.svg";

export default function Explain() {
  const AnimatedOrnament1 = animated(Ornament1);
  // const [springValues,api] = useSpring(()=>({
  //   top: {top: "43%",right: "42%"},
  //   from: {top: "44%", right: "36%"},

  // }))
  return (
    <div className={styles.container}>
      <img src="/bg-explain.png" alt="" className={styles.bg} />
      <h2 className={styles.title}>
        <span>High yield</span>
        <span>savings account</span>
      </h2>
      <p className={styles.para}>
        <span>Zero balance account with</span>
        <span>no hidden fees</span>
      </p>
      <AnimatedOrnament1
        style={{ position: "absolute", top: "43%", right: "42%" }}
      />
      <img src="/mobile.png" alt="" className={styles.img} />
    </div>
  );
}
