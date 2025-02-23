import { Accordion, AccordionItem, useAccordionState } from '@szhsin/react-accordion';
import styles from "./styles.module.scss";
import CloseDownIcon from "@svgs/closedState.svg";
import OpenDownIcon from "@svgs/openState.svg";
import clsx from "clsx";
import { figtree, secondaryFont } from '@utilities/font';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import useOnScreen from '@hooks/useOnScreen';
import RivePage from '@molecules/RivFiles';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const OpenIcon = () => <span><CloseDownIcon /></span>;
const CloseIcon = () => <span><OpenDownIcon /></span>;

const Elements = () => {
    const {  toggle } = useAccordionState();
    return(
        <>
         {/* AccordionItem 1 */}
         <AccordionItem
         itemKey="item-1"
           header={({ state }) => (
             <div className={clsx(styles.accordionItemHeader,secondaryFont.className)}>
               <div style={{ flex: 1 }}>
                 What is Curie Save?
               </div>
               <div style={{ flex: 0.066,position:'relative',top:'4px' }}>
                 <RivePage
                   file='/faq_button.riv'
                   customStyles={{ width: '24px', height: '24px', objectFit: 'contain' }}
                   onClick={() => { toggle('item-1')}}
                 />
               </div>
             </div>
           )}
           buttonProps={{
             className: ({ isEnter }) =>
               `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
           }}
           className={styles.accordianItem}
           initialEntered
         >
           <div className={clsx(styles.accordionContent,secondaryFont.className)}>
             Curie Save combines the best of banking with the power of mutual funds. Unlike traditional bank accounts, where your money mostly sits idle, Curie Save allows you to grow your savings by investing them in mutual funds. You can still access and spend your money directly with UPI, anytime, anywhere.
           </div>
         </AccordionItem>

         {/* AccordionItem 2 */}
         <AccordionItem
           itemKey="item-2"
           header={({ state }) => (
             <div className={clsx(styles.accordionItemHeader,secondaryFont.className)}>
               <div style={{ flex: 1 }}>
                 Is my money kept in the Yes Bank account or invested in a Mutual Fund plan?
               </div>
               <div style={{ flex: 0.066,position:'relative',top:'4px' }}>
                 <RivePage
                   file='/faq_button.riv'
                   customStyles={{ width: '24px', height: '24px', objectFit: 'contain' }}
                   onClick={() => toggle('item-2')}
                 />
               </div>
             </div>
           )}
           buttonProps={{
             className: ({ isEnter }) =>
               `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
           }}
           className={styles.accordianItem}
         >
           <div className={clsx(styles.accordionContent,secondaryFont.className)}>
             All the money you add to Curie Save is invested in SEBI-compliant mutual fund plans through our registered ARN. However, any refunds, cashback amounts, or funds moved to your Spending account will remain in your Yes Bank account.
           </div>
         </AccordionItem>

         {/* AccordionItem 3 */}
         <AccordionItem
           itemKey="item-3"
           header={({ state }) => (
             <div className={clsx(styles.accordionItemHeader,secondaryFont.className)}>
               <div style={{ flex: 1 }}>
                 What are the risks associated with liquid mutual funds?
               </div>
               <div style={{ flex: 0.066,position:'relative',top:'4px' }}>
                 <RivePage
                   file='/faq_button.riv'
                   customStyles={{ width: '24px', height: '24px', objectFit: 'contain' }}
                   onClick={() => toggle('item-3')}
                 />
               </div>
             </div>
           )}
           buttonProps={{
             className: ({ isEnter }) =>
               `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
           }}
           className={styles.accordianItem}
         >
           <div className={clsx(styles.accordionContent,secondaryFont.className)}>
             Liquid mutual funds are generally considered low-risk funds, as they invest in short-term, high-quality assets like government securities and high-rated corporate bonds. However, like any investment, they're not entirely risk-free. The main risks include slight changes in returns due to market fluctuations. That said, liquid funds are designed to offer stability and quick access to your money.
           </div>
         </AccordionItem>

         {/* AccordionItem 4 */}
         <AccordionItem
           itemKey="item-4"
           header={({ state }) => (
             <div className={clsx(styles.accordionItemHeader,secondaryFont.className)}>
               <div style={{ flex: 1 }}>
                 How do the returns of Curie compare to a traditional bank account?
               </div>
               <div style={{ flex: 0.066,position:'relative',top:'4px' }}>
                 <RivePage
                   file='/faq_button.riv'
                   customStyles={{ width: '24px', height: '24px', objectFit: 'contain' }}
                   onClick={() => toggle('item-4')}
                 />
               </div>
             </div>
           )}
           buttonProps={{
             className: ({ isEnter }) =>
               `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
           }}
           className={styles.accordianItem}
         >
           <div className={clsx(styles.accordionContent,secondaryFont.className)}>
             Curie Save offers higher returns compared to traditional bank accounts. While many traditional accounts provide low interest rates of 2% to 3% that don't keep up with inflation, Curie Save invests your money in mutual funds, which can deliver a CAGR of up to 7.3%.
           </div>
         </AccordionItem>

         {/* AccordionItem 5 */}
         <AccordionItem
           itemKey="item-5"
           header={({ state }) => (
             <div className={clsx(styles.accordionItemHeader,secondaryFont.className)}>
               <div style={{ flex: 1 }}>
                 How can I use my money added to Curie Save?
               </div>
               <div style={{ flex: 0.066,position:'relative',top:'4px' }}>
                 <RivePage
                   file='/faq_button.riv'
                   customStyles={{ width: '24px', height: '24px', objectFit: 'contain' }}
                   onClick={() => toggle('item-5')}
                 />
               </div>
             </div>
           )}
           buttonProps={{
             className: ({ isEnter }) =>
               `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
           }}
           className={styles.accordianItem}
         >
           <div className={clsx(styles.accordionContent,secondaryFont.className)}>
             You can directly use your money from Curie Save with UPI or transfer it to your Spending account in one click for debit card payments. Curie also provides fund transfer facilities to directly transfer money from Curie Save using NEFT, RTGS, and IMPS. You can pay or transfer ₹50,000 per business day or 90% of your daily balance from Mutual Funds in Curie Save.
           </div>
         </AccordionItem>

         {/* AccordionItem 6 */}
         <AccordionItem
           itemKey="item-6"
           header={({ state }) => (
             <div className={clsx(styles.accordionItemHeader,secondaryFont.className)}>
               <div style={{ flex: 1 }}>
                 What are the various charges of investing in the mutual fund?
               </div>
               <div style={{ flex: 0.066,position:'relative',top:'4px' }}>
                 <RivePage
                   file='/faq_button.riv'
                   customStyles={{ width: '24px', height: '24px', objectFit: 'contain' }}
                   onClick={() => toggle('item-6')}
                 />
               </div>
             </div>
           )}
           buttonProps={{
             className: ({ isEnter }) =>
               `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
           }}
           className={styles.accordianItem}
         >
           <div className={clsx(styles.accordionContent,secondaryFont.className)}>
             The given mutual fund has an expense ratio of 0.29% inclusive of GST, plus the stamp duty of .005%. While spending the exit load of 0.0070% if redeemed within 1 day, 0.0065% if redeemed within 2 days, 0.0060% if redeemed within 3 days, 0.0055% if redeemed within 4 days, 0.0050% if redeemed within 5 days, 0.0045% if redeemed within 6 days is charged. No exit load charged if redeemed after 7 days. The stamp duty of 0.005% is charged on every purchase.
           </div>
         </AccordionItem>
         </>
    )
}

const FAQComp = () => {
  const [animationData, setAnimationData] = useState(null);
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen({
    ref,
    threshold: 0.15,
    dontUpdateAfterIntersection: false,
  });





  useEffect(() => {
    fetch("/curie_us.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.animation}>
        {isOnScreen && <Lottie animationData={animationData} autoplay loop />}
      </div>
      <div className={clsx(styles.appbar, secondaryFont.className)}>
        Most asked questions
      </div>
      <div className={styles.container}>
        <div className={clsx(styles.header,secondaryFont.className)}>
          <Accordion allowMultiple transition transitionTimeout={300} className={styles.accordianHeader}>
           <Elements/>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQComp;