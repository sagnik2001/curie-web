import { calson } from "@utilities/font";
import * as styles from "./Hero.module.scss";
import ScrollSvg from "@svgs/scroll.svg";
import clsx from "clsx";
import Ornament1 from "@svgs/hero/ornament1.svg";
import Ornament2 from "@svgs/hero/ornament2.svg";
import Ornament3 from "@svgs/hero/ornament3.svg";
import Ornament4 from "@svgs/hero/ornament4.svg";
import Ornament5 from "@svgs/hero/ornament5.svg";
import Ornament6 from "@svgs/hero/ornament6.svg";
import Ornament7 from "@svgs/hero/ornament7.svg";
import { useEffect, useState } from "react";
import { useSpring, animated, easings } from "@react-spring/web";

export default function Hero() {
  const [loadAnimation, setLoadAnimation] = useState(false);
  const AnimatedOrnament1 = animated(Ornament1);
  const AnimatedOrnament2 = animated(Ornament2);
  const AnimatedOrnament3 = animated(Ornament3);
  const AnimatedOrnament4 = animated(Ornament4);
  const AnimatedOrnament5 = animated(Ornament5);
  const AnimatedOrnament6 = animated(Ornament6);
  const AnimatedOrnament7 = animated(Ornament7);
  const ornment1AnimationProps = useSpring({
    from: { top: "80px", left: "90px", opacity: 0 },
    to: { top: "0px", left: "32px", opacity: 1 },
    config: { easing: easings.easeOutSine, duration: 400 },
  });
  const ornment2AnimationProps = useSpring({
    from: { top: "80px", left: "45%", opacity: 0 },
    to: { top: "0px", left: "50%", opacity: 1 },
    config: { easing: easings.easeOutSine, duration: 400 },
  });

  const ornment3AnimationProps = useSpring({
    from: { top: "90px", right: "20px", opacity: 0 },
    to: { top: "32px", right: "-90px", opacity: 1 },
    config: { easing: easings.easeOutSine, duration: 400 },
  });

  const ornment4AnimationProps = useSpring({
    from: { top: "120px", left: "-0px", opacity: 0 },
    to: { top: "92px", left: "-66px", opacity: 1 },
    config: { easing: easings.easeOutSine, duration: 400 },
  });
  const ornment5AnimationProps = useSpring({
    from: { right: "40px", bottom: "160px", opacity: 0 },
    to: { right: "-28px", bottom: "84px", opacity: 1 },
    config: { easing: easings.easeOutSine, duration: 400 },
  });
  const ornment6AnimationProps = useSpring({
    from: { bottom: "240px", left: "40%", opacity: 0 },
    to: { bottom: "88px", left: "20%", opacity: 1 },
    config: { easing: easings.easeOutSine, duration: 400 },
  });
  const ornment7AnimationProps = useSpring({
    from: { bottom: "240px", left: "40px", opacity: 0 },
    to: { bottom: "160px", left: "-12px", opacity: 1 },
    config: { easing: easings.easeOutSine, duration: 400 },
  });

  useEffect(() => {
    setLoadAnimation(true);
  }, []);
  return (
    <div className={styles.container}>
      <img src="/bg-top-1.png" className={styles.bg} />
      <Ornament1
        className={clsx(
          styles.ornament1,
          loadAnimation && styles.animateOrnament1
        )}
      />
      <Ornament2
        className={clsx(
          styles.ornament2,
          loadAnimation && styles.animateOrnament2
        )}
      />
      <Ornament3
        className={clsx(
          styles.ornament3,
          loadAnimation && styles.animateOrnament3
        )}
      />
      <Ornament4
        className={clsx(
          styles.ornament4,
          loadAnimation && styles.animateOrnament4
        )}
      />
      <Ornament5
        className={clsx(
          styles.ornament5,
          loadAnimation && styles.animateOrnament5
        )}
      />
      <Ornament6
        className={clsx(
          styles.ornament6,
          loadAnimation && styles.animateOrnament6
        )}
      />
      <Ornament7
        className={clsx(
          styles.ornament7,
          loadAnimation && styles.animateOrnament7
        )}
      />
      <h1
        className={clsx(styles.heading, loadAnimation && styles.animateHeading)}
      >
        <span className={styles.first}>Spend</span>
        <span className={styles.first}> while your</span>
        <span className={styles.second}>money multiplies</span>
      </h1>
      <div className={styles.scrollBtn}>
        <ScrollSvg />
        <div className={clsx(calson.className, styles.text)}>scroll</div>
      </div>
    </div>
  );
}
