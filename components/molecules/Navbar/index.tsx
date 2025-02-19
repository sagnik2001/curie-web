import clsx from "clsx";
import * as styles from "./Navbar.module.scss";
import CurieLogo from "@svgs/curie-logo-new.svg";
import { calson } from "@utilities/font";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import { useRouter } from "next/router";
import MarqueeHeader from "@features/Landing/Desktop/MarqueeHeader";

type ScreenSize = "unknown" | "mobile" | "not-mobile";


export default function Navbar({ className = "" }: { className?: string }) {
  const [showPopup, setShowPopup] = useState(false);
    const [screenSize, setScreenSize] = useState<ScreenSize>("unknown");
    useEffect(() => {
      const handleScreenSize = () => {
        const screenSize = window.screen.width > 767 ? "not-mobile" : "mobile";
        setScreenSize(screenSize);
      };
      handleScreenSize();
      window.addEventListener("resize", handleScreenSize);
      return () => window.removeEventListener("resize", handleScreenSize);
    }, []);
  const router = useRouter();
  useEffect(() => {
    const element = document.getElementById("html")!;
    if (showPopup) {
      element.style.overflow = "hidden";
    } else {
      element.style.overflow = "unset";
    }
  }, [showPopup]);
  return (
    <div className={clsx(className,styles.test)}>
      <div className={clsx(styles.container)}>
        <div className={styles.box}>
          <div
            onClick={() => {
              window.location.pathname === "/"
                ? window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                : router.push("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <CurieLogo className={styles.newLogo} />
          </div>
          <div className={styles.btn} onClick={() => setShowPopup(true)}>
            <a className={calson.className}>
              <span>download curie app</span>
            </a>
          </div>
        </div>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
