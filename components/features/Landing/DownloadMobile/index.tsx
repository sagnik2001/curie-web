import clsx from "clsx";
import * as styles from "./DownloadMobile.module.scss";
import { calson } from "@utilities/font";

export default function DownloadMobile() {
  return (
    <div className={styles.btn} onClick={() => {}}>
      <button className={calson.className}>
        <span>download curie</span>
      </button>
    </div>
  );
}
