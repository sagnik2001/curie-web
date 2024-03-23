import clsx from "clsx";
import * as styles from "./Navbar.module.scss";
import CurieLogo from "@svgs/curie-logo.svg";
import { calson } from "@utilities/font";
import { useState } from "react";
import Popup from "./Popup";

export default function Navbar({ className = "" }: { className?: string }) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className={clsx(styles.container, className)}>
        <div className={styles.box}>
          <div
            onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            <CurieLogo />
          </div>
          <div className={styles.btn} onClick={() => setShowPopup(true)}>
            <a className={calson.className}>
              <span>download curie</span>
            </a>
          </div>
        </div>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
}
