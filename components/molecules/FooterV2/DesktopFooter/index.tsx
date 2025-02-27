import Link from "next/link";
import YesBankSvg from "@svgs/footer/v2/yesBank.svg";
import IciciBankSvg from "@svgs/footer/v2/icici.svg";
import NpciSvg from "@svgs/footer/v2/npcl.svg";
import RupaySvg from "@svgs/footer/v2/rupay.svg";
import PciSvg from "@svgs/footer/v2/pcidss.svg";
import AmfiSvg from "@svgs/footer/v2/amfi.svg";
import BajajSvg from "@svgs/footer/v2/bajaj.svg";
import * as styles from "./DesktopFooter.module.scss";
import clsx from "clsx";
import { secondaryFont } from "@utilities/font";

export default function DesktopFooter({
  landingPage,
}: {
  landingPage: boolean;
}) {
  return (
    <div className={clsx(styles.footer, secondaryFont.className)}>
      <div className={styles.container}>
        <div className={styles.join}>
          <div className={styles.msgBox}>
            <h4 className={clsx(styles.msg,secondaryFont.className)}>
              <span>Download our app!</span>
            </h4>
          </div>
          <div className={clsx(styles.footerTxt,secondaryFont.className)}>
          <span>We are shaping the future of banking,</span>
          <span>come be a part of this journey!</span>
          </div>
      
        </div>
        <div className={styles.contact}>
          <Link href="mailto:support@curie.money" target="_blank">
            <div className={styles.socialBox}>
              <span className={styles.socialLabel}>Email</span>
              <span className={styles.socialValue}>support@curie.money</span>
            </div>
          </Link>
          <Link
            href="https://chat.whatsapp.com/IvJATkpzt6uEucYWxdf6lH"
            target="_blank"
          >
            <div className={styles.socialBox}>
              <span className={styles.socialLabel}>Whatsapp</span>
              <span className={styles.socialValue}>@curie_community</span>
            </div>
          </Link>
          <Link href="https://twitter.com/CurieMoney" target="_blank">
            <div className={styles.socialBox}>
              <span className={styles.socialLabel}>Twitter</span>
              <span className={styles.socialValue}>@CurieMoney</span>
            </div>
          </Link>
          <Link href="https://www.instagram.com/curiemoney/" target="_blank">
            <div className={styles.socialBox}>
              <span className={styles.socialLabel}>Instagram</span>
              <span className={styles.socialValue}>@CurieMoney</span>
            </div>
          </Link>
          <Link href="https://www.facebook.com/curiemoney/" target="_blank">
            <div className={styles.socialBox}>
              <span className={styles.socialLabel}>Facebook</span>
              <span className={styles.socialValue}>@curiemoney</span>
            </div>
          </Link>
          <Link href="https://www.youtube.com/@curiemoney" target="_blank">
            <div className={styles.socialBox}>
              <span className={styles.socialLabel}>Youtube</span>
              <span className={styles.socialValue}>@curiemoney</span>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.partnerBox}>
        <span className={styles.tag}>Our partners</span>
        <div>
          <div className={styles.bankBox}>
            <YesBankSvg />
            <IciciBankSvg />
            <BajajSvg/>
            <NpciSvg />
            <RupaySvg />
            <PciSvg />
            <AmfiSvg />
          </div>
        </div>
      </div>
          <div className={styles.linkRow}>
            <Link href="/about-us" target="_blank" className={styles.link}>
              About
            </Link>
            <Link
              href="/privacy-policy"
              target="_blank"
              className={styles.link}
            >
              Privacy Policy
            </Link>
            <Link href="/terms" target="_blank" className={styles.link}>
              Terms and Conditions
            </Link>
            <Link
              href="/cancellation-and-refund-policy"
              target="_blank"
              className={styles.link}
            >
              Refund and Cancellation Policy
            </Link>
            <Link href="/contact-us" target="_blank" className={styles.link}>
              Contact Us
            </Link>
            <Link href="/investor-charter" target="_blank" className={styles.link}>
              Investor Charter
            </Link>
            <Link href="/grievance-data" target="_blank" className={styles.link}>
              Grievance Data
            </Link>
            <Link href="/mutual-fund-terms" target="_blank" className={styles.link}>
              Mutual Fund Terms and conditions
            </Link>
            <Link href="/upi-lite-terms" target="_blank" className={styles.link}>
              UPI Lite Terms and conditions
            </Link>
          </div>
          <div className={styles.footertxt}>
          *Based on past 1 yr historical data. Mutual Fund investments are subject to market risks, please read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes.          </div>
    </div>
  );
}
