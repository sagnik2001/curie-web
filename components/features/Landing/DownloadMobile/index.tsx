import clsx from "clsx";
import * as styles from "./DownloadMobile.module.scss";
import { calson } from "@utilities/font";

export default function DownloadMobile() {
  return (
    <div className={clsx(styles.btn, calson.className)} onClick={() => {}}>
      <button>
        <span>download curie</span>
      </button>
    </div>
  );
}
