import Link from "next/link";
import YesBankSvg from "@svgs/footer/yesBank.svg";
import IciciBankSvg from "@svgs/footer/icici.svg";
import NpciSvg from "@svgs/footer/npci.svg";
import RupaySvg from "@svgs/footer/rupay.svg";
import PciSvg from "@svgs/footer/pci.svg";
import AmfiSvg from "@svgs/footer/amfi.svg";
import SebiSvg from "@svgs/footer/SEBI.svg";
import * as styles from "./Footer.module.scss";
import DesktopFooter from "./DesktopFooter";

export default function Footer({
  landingPage = false,
}: {
  landingPage?: boolean;
}) {
  return (
    <>
      <DesktopFooter landingPage={landingPage} />
      <div className={styles.footer}>
        {!landingPage && <div className={styles.band}></div>}
        <div className={styles.join}>
          <h4 className={styles.joinText}>
            <span>Join the</span>
            <span>community</span>
          </h4>
          <p className={styles.paraText}>
            <span>Learn more about Curie,</span>
            <span>chat with the team, others in the community,</span>
            <span>& have your say in shaping the future of banking.</span>
          </p>
        </div>
        <div className={styles.socialBox}>
          <span className={styles.socialLabel}>Email</span>
          <span className={styles.socialValue}>
            <Link href="mailto:hello@curie.money" target="_blank">
              hello@curie.money
            </Link>
          </span>
        </div>
        <div className={styles.socialBox}>
          <span className={styles.socialLabel}>Whatsapp</span>
          <span className={styles.socialValue}>
            <Link
              href="https://chat.whatsapp.com/IvJATkpzt6uEucYWxdf6lH"
              target="_blank"
            >
              @curie_community
            </Link>
          </span>
        </div>
        <div className={styles.socialBox}>
          <span className={styles.socialLabel}>Twitter</span>
          <span className={styles.socialValue}>
            <Link href="https://twitter.com/CurieMoney" target="_blank">
              @curie_money
            </Link>
          </span>
        </div>
        <div className={styles.socialBox}>
          <span className={styles.socialLabel}>Instagram</span>
          <span className={styles.socialValue}>
            <Link href="https://www.instagram.com/curiemoney/" target="_blank">
              @curie_money
            </Link>
          </span>
        </div>
        <div className={styles.socialBox}>
          <span className={styles.socialLabel}>Youtube</span>
          <span className={styles.socialValue}>
            <Link href="mailto:hello@curie.money" target="_blank">
              @curie_money
            </Link>
          </span>
        </div>
        <div className={styles.links}>
          <Link href="/about-us" target="_blank" className={styles.link}>
            About
          </Link>
          <Link href="/privacy-policy" target="_blank" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/terms" target="_blank" className={styles.link}>
            Terms and Conditions
          </Link>
        </div>
        <div className={styles.partnerBox}>
          <span className={styles.tag}>Our partners</span>
          <div>
            <div className={styles.bankBox}>
              <YesBankSvg />
              <IciciBankSvg />
              <NpciSvg />
            </div>
            <div className={styles.regulatorBox}>
              <RupaySvg />
              <PciSvg />
              <AmfiSvg />
              <SebiSvg />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
