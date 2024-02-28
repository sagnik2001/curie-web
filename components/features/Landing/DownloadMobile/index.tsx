import clsx from "clsx";
import * as styles from "./DownloadMobile.module.scss";
import { calson } from "@utilities/font";

export default function DownloadMobile() {
  return (
    <div className={styles.btn} onClick={() => {}}>
      <a
        href="https://play.google.com/store/apps/details?id=com.yield.curie_money"
        target="_blank"
        className={calson.className}
      >
        <span>download curie</span>
      </a>
    </div>
  );
}
