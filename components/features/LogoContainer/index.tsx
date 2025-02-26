import styles from "./Logo.module.scss"
import { useRouter } from "next/router";
import CurieLogo from "@svgs/curie-logo-new.svg";


const LogoContainer = () => {
    const router = useRouter()
    return(
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
        className={styles.logoContainer}
        style={{ cursor: "pointer" ,}}
      >
        <CurieLogo style={{ mixBlendMode: "difference" }} className={styles.newLogo} />
      </div>
    )
}

export default LogoContainer