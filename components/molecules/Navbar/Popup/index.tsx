import { createPortal } from "react-dom";
import * as styles from "./Popup.module.scss";
import clsx from "clsx";
import CloseSvg from "@svgs/close.svg";
import { calson, figtree } from "@utilities/font";
import WhatsappIcon from "@svgs/whatsappIcon.svg";

function Download({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className={styles.bg} />
      <div className={styles.elementBox}>
        <div className={clsx(styles.modal, figtree.className)}>
          <div className={styles.close} onClick={onClose}>
            <CloseSvg />
          </div>
          <div className={styles.contentBox}>
            <div className={styles.imgBox}>
              <img src="/play-logo.png" alt="" />
              <img src="/apple-logo.png" alt="" />
            </div>
            <h2 className={styles.title}>Download & join our beta</h2>
            <ul className={styles.para}>
              <li>Scan the QR code using your phone camera</li>
              <li>Click on the link generated to download Curie</li>
            </ul>
            <div className={styles.downloadTxt}>
              Once downloaded get your invite code
            </div>
            <div className={styles.btn}>
              <a
                className={calson.className}
                href="https://chat.whatsapp.com/Lj9reYKGt8079JRTDhmHLi"
                target="_blank"
              >
                <WhatsappIcon />
                <span>Get invite code</span>
              </a>
            </div>
          </div>
          <picture>
           
            <source
              srcSet="/download-qr.png"
              type="image/png"
              className={styles.img}
            />
            <img src="/download-qr.png" alt="" className={styles.img} />
          </picture>
        </div>
      </div>
    </>
  );
}

export default function Popup({ onClose }: { onClose: () => void }) {
  const element = document.getElementById("portal");
  return createPortal(<Download onClose={onClose} />, element!);
}
