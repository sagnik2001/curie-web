import * as styles from "./Privacy.module.scss";
import FooterV2 from "@molecules/FooterV2";
import Navbar from "@molecules/Navbar";
import { secondaryFont } from "@utilities/font";
import clsx from "clsx";

export default function Privacy() {
  return (
 <div className={styles.page}>
      <Navbar className={styles.nav} />
      <div className={clsx(styles.container,secondaryFont.className)}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.para}>
          This Privacy Policy applies to the www.curie.money
        </p>
        <p className={styles.para}>
          <i>www.curie.money</i> (“platform”) recognises the importance of
          maintaining your privacy. We value your privacy and appreciate your
          trust in us. This Policy describes how we treat user information we
          collect on https://www.curie.money and other online sources. This
          Privacy Policy applies to current and former visitors to our website
          and to our online customers. By visiting and/or using our website, you
          agree to this Privacy Policy. www.curie.money is a property of Yield
          Technologies Private Limited, an Indian company registered under the
          Companies Act, 2013 having its registered office at: #714, 5th Cross,
          4th Block, Koramangala, Bangalore - 560034.
        </p>
        <h2 className={styles.header}>Information we collect</h2>
        <ul className={styles.para}>
          <li>
            <b>Contact information. </b>
            <br />
            We might collect your name, email, mobile number, phone number,
            street, city, state, pin code, country and IP address.
          </li>
          <li>
            <b>Payment and billing information.</b>
            <br />
            We might collect your billing name, billing address and payment
            method when you use the platform. We NEVER collect your credit card
            number or credit card expiry date or other details pertaining to
            your credit card on our website. Credit card information will be
            obtained and processed by our online payment partner who are PCI-DSS
            compliant service providers and are not permitted to store, retain,
            or use your billing information for any purpose except for payment
            processing for using our platform.
          </li>
          <li>
            <b>Information you post. </b>
            <br />
            We collect information you post in a public space on our website or
            on a third-party social media site&apos; belonging to
            www.curie.money
          </li>
          <li>
            <b>Other information.</b>
            <br />
            If you use our website, we may collect information about your IP
            address and the browser you&apos;re using. We might look at what
            site you came from, duration of time spent on our website, pages
            accessed or what site you visit when you leave us. We might also
            collect the type of mobile device you are using, or the version of
            the operating system your computer or device is running.
          </li>
          <li>
            <b>We collect information in different ways.</b>
          </li>
          <li>
            <b>We collect information directly from you.</b>
            <br />
            We collect information directly from you when you register or set up
            an account with us on the platform. We also collect information if
            you post a comment on our websites or ask us a question through
            phone or email.
          </li>
          <li>
            <b>We collect information from you passively.</b>
            <br />
            We use tracking tools like Google Analytics, Hotjar, Webengage,
            Moengage, Mixpanel browser cookies and web beacons for collecting
            information about your usage of our website.
          </li>
          <li>
            <b>We get information about you from third parties.</b>
            <br />
            For example, if you use an integrated social media feature on our
            websites. The third-party social media site will give us certain
            information about you. This could include your name and email
            address.
          </li>
        </ul>
        <h2 className={styles.header}>Use of your personal information</h2>
        <ul className={styles.para}>
          <li>
            <b>We use information to contact you.</b>
            <br />
            We might use the information you provide to contact you for
            confirmation of a payment/transaction on our website or for other
            promotional purposes.
          </li>
          <li>
            <b>We use information to respond to your requests or questions.</b>
            <br />
            We might use your information to to process and fulfil your request
            for Services or respond to your comments, and queries on the
            platform.
          </li>
          <li>
            <b>We use information to improve our products and services.</b>
            <br />
            We might use your information to customize your experience with us.
            This could include displaying content based upon your preferences.
          </li>
          <li>
            <b>
              We use information to look at site trends and customer interests.
            </b>
            <br />
            We may use your information to make our website and products better.
            We may combine information we get from you with information about
            you we get from third parties.
          </li>
          <li>
            <b>We use information for security purposes.</b>
            <br />
            We may use information to protect our company, our customers, or our
            websites.
          </li>
          <li>
            <b>We use information for marketing purposes. </b>
            <br />
            We might send you information about special promotions or offers. We
            might also tell you about new features or products. These might be
            our own offers or products, or third-party offers or products we
            think you might find interesting. Or, for example, if you set up an
            account on our platform, we&apos;ll enroll you in our newsletter.
          </li>
          <li>
            <b>We use information to send you transactional communications.</b>
            <br />
            We might send you emails or SMS about your account or a support
            request <b>or query.</b>
            <br />
            <b>We use information as otherwise permitted by law.</b>
          </li>
        </ul>
        <h2 className={styles.header}>
          Sharing of information with third-parties
        </h2>
        <ul className={styles.para}>
          <li>
            <b>
              We will share information with third parties who perform services
              on our behalf.
            </b>
            <br />
            We share information with vendors who help us manage our online
            registration process or payment processors or transactional message
            processors. Some vendors may be located outside of India.
          </li>
          <li>
            <b>We will share information with our business partners.</b>
            <br />
            We may also disclose your Information to third party vendors,
            consultants, and other service providers who work for the Company
            and use it only for the purposes for which we disclose it to them.
            This disclosure may be required for us, for instance, to provide you
            access to our services and process payments including validation of
            Your bank accounts, to facilitate and assist our marketing and
            advertising activities/initiatives, for undertaking auditing or data
            analysis, or to prevent, detect, mitigate, and investigate
            fraudulent or illegal activities related to our services.
          </li>
          <li>
            <b>
              We may share information if we think we have to in order to comply
              with the law or to protect ourselves.
            </b>
            <br />
            We will share information to respond to a court order or subpoena.
            We may also share it if a government agency or investigatory body
            requests. Or, we might also share information when we are
            investigating potential fraud.
          </li>
          <li>
            <b>
              We may share information with any successor to all or part of our
              business.
            </b>
            <br />
            For example, if part of our business is sold we may give our
            customer list as part of that transaction.
          </li>
          <li>
            <b>
              We may share your information for reasons not described in this
              policy.
            </b>
            <br />
            We will tell you before we do this.
          </li>
        </ul>
        <p className={styles.para}>
          <b>Email Opt-Out</b>
          <br />
          You can opt out of receiving our marketing emails. To stop receiving
          our promotional emails, please email support@curie.money It may take
          about ten days to process your request. Even if you opt out of getting
          marketing messages, we will still be sending you transactional
          messages through email and SMS about your purchases.
        </p>
        <p className={styles.para}>
          <b>Third party sites</b>
          <br />
          If you click on one of the links to third party websites, you may be
          taken to websites we do not control. This policy does not apply to the
          privacy practices of those websites. Read the privacy policy of other
          websites carefully. We are not responsible for these third party
          sites.
        </p>
        <p className={styles.para}>
          <b>Grievance Officer</b>
          <br />
          In accordance with Information Technology Act 2000 and rules made
          there under, the name and contact details of the Grievance Officer are
          provided below:
          <br />
          Mr. Arindam Ghosh
          <br />
          Phone: +91- 97564 76649
          <br />
          Email: support@curie.money
          <br />
          If you have any questions about this Policy or other privacy concerns,
          you can also email us at support@curie.money
        </p>
        <p className={styles.para}>
          <b>Updates to this policy</b>
          <br />
          This Privacy Policy was last updated on 20.02.2023. From time to time
          we may change our privacy practices. We will notify you of any
          material changes to this policy as required by law. We will also post
          an updated copy on our website. Please check our site periodically for
          updates.
          <br />
          <br />
          <b>Legal Obligation and Jurisdiction</b>
          <br />
          www.curie.money is bound by the by the law of Information Technology
          Act, 2000 as applicable in India and rules made thereunder, and it
          shall comply with all its provisions. Under Section 43A of the
          Information Technology Act, 2000, www.curie.money and all its vendors
          are obliged to maintain reasonable security procedures to safeguard
          Your data.
          <br />
          <br />
          If you choose to visit the website, your
          visit and any dispute over privacy is subject to this Policy and the
          website&apos;s terms of use. In addition to the foregoing, any
          disputes arising under this Policy shall be governed by the laws of
          India.
        </p>
      </div>
      <FooterV2 />
    </div>
  );
}
