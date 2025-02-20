import Link from "next/link";
import YesBankSvg from "@svgs/footer/v2/yesBank.svg";
import IciciBankSvg from "@svgs/footer/v2/icici.svg";
import NpciSvg from "@svgs/footer/v2/npcl.svg";
import RupaySvg from "@svgs/footer/v2/rupay.svg";
import PciSvg from "@svgs/footer/v2/pcidss.svg";
import AmfiSvg from "@svgs/footer/v2/amfi.svg";
import BajajSvg from "@svgs/footer/v2/bajaj.svg";
import * as styles from "./Footer.module.scss";
import DesktopFooter from "./DesktopFooter";
import clsx from "clsx";
import { secondaryFont } from "@utilities/font";

export default function FooterV2({
  landingPage = false,
}: {
  landingPage?: boolean;
}) {
  return (
    <>
      <DesktopFooter landingPage={landingPage} />
      <div className={clsx(styles.footer, secondaryFont.className)}>
        {!landingPage && <div className={styles.band}></div>}
        <div className={styles.join}>
          <h4 className={styles.joinText}>
          <span>Download our app!</span>
          </h4>
          <p className={styles.paraText}>
            <span>We are shaping the future of banking</span>
            <span>come be a part of this journey!</span>
          </p>
        </div>
        <div className={styles.socialBox}>
          <span className={styles.socialLabel}>Email</span>
          <span className={styles.socialValue}>
            <Link href="mailto:support@curie.money" target="_blank">
              support@curie.money
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
          <span className={styles.socialLabel}>Facebook</span>
          <span className={styles.socialValue}>
            <Link href="https://www.facebook.com/curiemoney/" target="_blank">
              @curiemoney
            </Link>
          </span>
        </div>
        <div className={styles.socialBox}>
          <span className={styles.socialLabel}>Youtube</span>
          <span className={styles.socialValue}>
            <Link href="https://www.youtube.com/@curiemoney" target="_blank">
              @curiemoney
            </Link>
          </span>
        </div>
    
        <div className={styles.partnerBox}>
          <span className={styles.tag}>Our partners</span>
          <div>
            <div className={styles.bankBox}>
              <YesBankSvg />
              <IciciBankSvg />
              <BajajSvg/>
            </div>
            <div className={styles.regulatorBox}>
            <NpciSvg />
              <RupaySvg />
              <PciSvg />
              <AmfiSvg />
            </div>
          </div>
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
        <div className={styles.footertxt}>
                    *Based on past 1 yr historical data. Mutual Fund investments are subject to market risks, please read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes.
                    </div>
         
      </div>
    </>
  );
}
