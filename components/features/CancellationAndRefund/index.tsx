import StickiedNavbar from "@molecules/StickiedNavbar";
import * as styles from "./CancellationAndRefund.module.scss";
import Footer from "@molecules/Footer";

export default function CancellationAndRefund() {
  return (
    <>
      <StickiedNavbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Cancellation And Refund Policy</h1>
        <h2 className={styles.header}>EFFECTIVE DATE: 27/12/2023</h2>
        <p className={styles.para}>
          Thank you for choosing Yield Technologies Private Limited (referred to
          as ‘The Company’ hereafter). This Cancellation and Refund Policy
          outlines our procedures regarding the cancellation of services and the
          associated refund process.
        </p>
        <h2 className={styles.header}>CANCELLATION POLICY</h2>
        <ul className={styles.para}>
          <li>
            Clients may request the cancellation of services by providing a
            written notice through email or our customer support portal. The
            cancellation request should include relevant details such as the
            client's name, account information, and the specific services to be
            canceled.
          </li>
          <li>
            The Company reserves the right to charge a cancellation fee based on
            the stage of completion of the service at the time of cancellation.
            The cancellation fee will be communicated to the client upon receipt
            of the cancellation request.
          </li>
          <li>
            The Company may cancel services in the event of non-payment, breach
            of terms and conditions, or any other violation of the agreement
            between the Company and the client.
          </li>
        </ul>
        <h2 className={styles.header}>REFUND POLICY</h2>
        <ul className={styles.para}>
          <li>
            Refunds will be considered on a case-by-case basis. Clients must
            demonstrate a valid reason for seeking a refund, such as
            unsatisfactory service quality or failure to meet agreed-upon
            specifications.
          </li>
          <li>
            Once a refund request is received and deemed eligible, the Company
            will initiate the refund process. The refund will be issued using
            the same payment method used for the original transaction.
          </li>
          <li>
            The processing time for refunds may vary depending on the payment
            method and financial institutions involved. Clients can expect to
            receive the refund within 7 days from the date of approval.
          </li>
          <li>
            Certain fees, such as setup fees or administrative charges, may be
            non-refundable. These will be communicated to the client before the
            initiation of services.
          </li>
        </ul>
        <h2 className={styles.header}>CONTACT INFORMATION</h2>
        <p className={styles.para}>
          For any inquiries or to initiate the cancellation and refund process,
          please contact our customer support team at <b>support@curie.money</b>
        </p>
        <h2 className={styles.header}>AMENDMENTS TO THE POLICY</h2>
        <p className={styles.para}>
          The Company reserves the right to modify or update this Cancellation
          and Refund Policy at any time. Clients will be notified of any changes
          through the company's official communication channels.
        </p>
        <p className={styles.para}>
          By using our services, you agree to abide by the terms and conditions
          outlined in this Cancellation and Refund Policy.
        </p>
      </div>
      <Footer />
    </>
  );
}
