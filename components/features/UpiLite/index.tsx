import StickiedNavbar from "@molecules/StickiedNavbar";
import Footer from "@molecules/Footer";
import * as styles from "./Terms.module.scss";

export default function UpiLite() {
  return (
    <>
      <StickiedNavbar />
      <div className={styles.container}>
        <h1 className={styles.title}>UPI LITE Terms and Conditions</h1>
        <p className={styles.para}>
          These UPI LITE Terms and Conditions ("UPI LITE Terms") apply to and govern the UPI LITE Feature enabled by National Payments Corporation of India ("NPCI", "We", "Us" and "Our") on App. Please read these Terms carefully before accessing or using UPI LITE. These UPI LITE Terms are in addition to and not in derogation of the terms and conditions governing the use of Curie Money App prescribed by NPCI ("Terms And Conditions"). In the event of conflict between the UPI LITE Terms and the Curie Money App terms, the UPI LITE Terms shall have an overriding effect. By requesting to enable, or using, UPI LITE, you acknowledge that you have read, understood and agree to be bound by the UPI LITE Terms.
        </p>

        <h2 className={styles.header}>DEFINITIONS</h2>
        <p className={styles.para}>
          In the UPI LITE Terms the following words shall have the meanings as set below unless the context indicates otherwise. All other capitalised terms used in the UPI LITE Terms shall have the meaning ascribed to them in the Curie Money App terms.
        </p>
        <p className={styles.para}>
          "UPI LITE Balance" means the virtual 'on-device' balance enabled by the User from the Account, to perform Transactions using UPI LITE on the Curie Money App.
        </p>
        <p className={styles.para}>
          "UPI LITE" means the service provided to you by your Issuing Bank whereby low value transactions can be carried out using an 'on-device' wallet and is a Feature enabled on the Curie Money App.
        </p>

        <h2 className={styles.header}>TERMS</h2>
        <p className={styles.para}>
          You understand, agree, confirm and undertake that:
        </p>
        <ul className={styles.para}>
          <li>All your Accounts linked to your UPI IDs may not be eligible for UPI LITE. You can enable UPI LITE for one Account only in the App;</li>
          <li>The upper limit of a UPI LITE Transaction shall be Rs. 500/- and the total limit of UPI LITE Balance shall be Rs. 2000/- at any point in time or such other limits as may be prescribed by NPCI, from time to time. You understand and agree that NPCI may revise the aforesaid limits in its sole discretion and without providing any prior intimation to you;</li>
          <li>UPI LITE Balance in the App is only a virtual 'on-device' balance and a reflection of UPI LITE Balance allocated by you in your Account. No interest will be payable on the UPI LITE Balance. You further understand that actual money or funds with respect to UPI LITE Balance are not transferred to or received by NPCI from your Issuing Bank. The actual money/funds with respect to your UPI LITE Balance is held and maintained with your Issuing Bank;</li>
          <li>UPI LITE Balance can be replenished by making a top up Transaction i.e. allocate / add more funds to UPI LITE from your Account;</li>
          <li>In the event your access to UPI LITE is disabled, the unutilised UPI LITE Balance will be credited to your Account by your Issuing Bank. Any refund or reversal of funds under a Transaction will appear in your Account only and not in the App.</li>
          <li>UPI LITE can be accessed, and UPI LITE Transactions can be carried out, by simply logging in the App downloaded on your phone by entering your phone/device biometric or pattern validation details. You understand that separate Authorisation or UPI PIN is not required for carrying out Transaction using UPI LITE.</li>
          <li>UPI LITE Transactions other than top up Transaction will not be displayed in the statement (pass book) of your Account. You will receive SMS once a day for UPI LITE Transactions from your Issuing Bank containing history of Transactions carried out during the day;</li>
          <li>Any disputes pertaining to enablement, top up or disablement of UPI LITE shall be referred to and handled by your Issuing Bank;</li>
          <li>You are responsible for maintaining the confidentiality of your App password and other details associated with UPI LITE Transactions and you are solely responsible for all activities that occur under your password, mobile phones on which UPI LITE is enabled. If you know or suspect that someone else knows your App password, you should immediately take appropriate measures to change the same. You shall not hold NPCI responsible for any un-authorised Transactions made from your Account using UPI LITE including Transactions made by entering your log in Pin/password of the App. NPCI shall not be liable to your or any other person for any loss or damage which may arise as a result of any failure by you to protect your password or User account on App or in otherwise complying the UPI LITE Terms.</li>
          <li>Notwithstanding anything to the contrary contained in the UPI LITE Terms, NPCI reserves the right to deny the enablement of UPI LITE to you, suspend access to or terminate your User account on the App, or require you to change your password, at any time in its sole discretion and without any prior notice or liability to you or any other person.</li>
          <li>Before you change your mobile phone/device or in case you are going to uninstall the App, you shall disable UPI LITE from your old mobile phone/device and move the UPI LITE Balance back to your Account. If you fail to disable UPI LITE from your old phone/device then your Issuing Bank will not be able move the UPI LITE balance available in your UPI LITE, back to your Account. However, if you inform the Issuing bank for the same, your Issuing Bank will try on best efforts basis to refund any available UPI LITE balance to your account.</li>
          <li>Your cumulative daily spend limit is capped at Rs. 4000/- i.e. you cannot carry out UPI LITE Transactions beyond the maximum per day limit, as mentioned herein above.</li>
        </ul>

        <p className={styles.para}>
          The UPI LITE Terms shall be read in conjunction with the Curie Money App terms. The UPI LITE Terms and Curie Money App Terms shall together form the entire agreement between you and NPCI with respect to UPI LITE.
        </p>
      </div>
      <Footer />
    </>
  );
}
