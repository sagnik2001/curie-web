import * as styles from "./InvestorCharter.module.scss";
import FooterV2 from "@molecules/FooterV2";
import clsx from "clsx";
import { secondaryFont } from "@utilities/font";
import Navbar from "@molecules/Navbar";
import LogoContainer from "@features/LogoContainer";

export default function InvestorCharter() {
  return (
    <div className={styles.page}>
    <LogoContainer/>
    <Navbar className={styles.nav} />
    <div className={clsx(styles.container,secondaryFont.className)}>
        <h1 className={styles.title}>Investor Charter in respect of Investment Adviser (IA)</h1>

        <h2 className={styles.header}>A. Vision and Mission Statements for investors</h2>
        <p className={styles.para}>
          <strong>Vision</strong><br />
          Invest with knowledge & safety.
        </p>
        <p className={styles.para}>
          <strong>Mission</strong><br />
          Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.
        </p>

        <h2 className={styles.header}>B. Details of business transacted by the Investment Adviser with respect to the investors</h2>
        <ul className={styles.para}>
          <li>To enter into an agreement with the client providing all details including fee details, aspect of Conflict of interest disclosure and maintaining confidentiality of information.</li>
          <li>To do a proper and unbiased risk – profiling and suitability assessment of the client.</li>
          <li>To obtain registration with Know Your Client Registration Agency (KRA) and Central Know Your Customer Registry (CKYC).</li>
          <li>To conduct audit annually.</li>
          <li>To disclose the status of complaints in its website.</li>
          <li>To disclose the name, proprietor name, type of registration, registration number, validity, complete address with telephone numbers and associated SEBI regional/local Office details in its website.</li>
          <li>To employ only qualified and certified employees.</li>
          <li>To deal with clients only from official number.</li>
          <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to advice has taken place.</li>
        </ul>

        <h2 className={styles.header}>C. Vision and Mission Statements for investors</h2>
        <ul className={styles.para}>
          <li><strong>Vision</strong><br /> ⦿ Sharing of agreement copy<br /> ⦿ Completing KYC of clients</li>
          <li><strong>Disclosure to Clients</strong><br />
            ⦿ To provide full disclosure about its business, affiliations, compensation in the agreement.<br />
            ⦿ To not access client’s accounts or holdings for offering advice.<br />
            ⦿ To disclose the risk profile to the client.<br />
            To provide investment advice to the client based on the risk-profiling of the clients and suitability of the client.
          </li>
        </ul>

        <h2 className={styles.header}>D. Details of grievance redressal mechanism and how to access it</h2>
        <ol className={styles.para}>
          <li>In case of any grievance / complaint, an investor should approach the concerned Investment Adviser and shall ensure that the grievance is resolved within 30 days.</li>
          <li>If the investor’s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI’s 'SCORES' portal which is a centralized web based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.</li>
          <li>With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.</li>
        </ol>

        <h2 className={styles.header}>E. Expectations from the investors (Responsibilities of investors)</h2>
        <h3 className={styles.subheader}>Do's</h3>
        <ol className={styles.para}>
          <li>Always deal with SEBI registered Investment Advisers.</li>
          <li>Ensure that the Investment Adviser has a valid registration certificate.</li>
          <li>Check for SEBI registration number. Please refer to the list of all SEBI registered Investment Advisers which is available on SEBI website in the following link: <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13">SEBI Registered Investment Advisers</a>.</li>
          <li>Pay only advisory fees to your Investment Adviser. Make payments of advisory fees through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
          <li>Always ask for your risk profiling before accepting investment advice. Insist that Investment Adviser provides advisory strictly on the basis of your risk profiling and take into account available investment alternatives.</li>
          <li>Ask all relevant questions and clear your doubts with your Investment Adviser before acting on advice.</li>
          <li>Assess the risk–return profile of the investment as well as the liquidity and safety aspects before making investments.</li>
          <li>Insist on getting the terms and conditions in writing duly signed and stamped. Read these terms and conditions carefully particularly regarding advisory fees, advisory plans, category of recommendations etc. before dealing with any Investment Adviser.</li>
          <li>Be vigilant in your transactions.</li>
          <li>Approach the appropriate authorities for redressal of your doubts / grievances.</li>
          <li>Inform SEBI about Investment Advisers offering assured or guaranteed returns.</li>
        </ol>

        <h3 className={styles.subheader}>Don'ts</h3>
        <ol className={styles.para}>
          <li>Don’t fall for stock tips offered under the pretext of investment advice.</li>
          <li>Do not provide funds for investment to the Investment Adviser.</li>
          <li>Don’t fall for the promise of indicative or exorbitant or assured returns by the Investment Advisers. Don’t let greed overcome rational investment decisions.</li>
          <li>Don’t fall prey to luring advertisements or market rumors.</li>
          <li>Avoid doing transactions only on the basis of phone calls or messages from any Investment adviser or its representatives.</li>
          <li>Don’t take decisions just because of repeated messages and calls by Investment Advisers.</li>
          <li>Do not fall prey to limited period discount or other incentive, gifts, etc. offered by Investment advisers.</li>
          <li>Don’t rush into making investments that do not match your risk taking appetite and investment goals.</li>
          <li>Do not share login credential and password of your trading and demat accounts with the Investment Adviser.</li>
        </ol>
      </div>
      <FooterV2 />
    </div>
  );
}
