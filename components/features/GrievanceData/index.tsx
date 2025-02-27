import React from 'react';
import * as styles from "./GrievanceData.module.scss";
import clsx from "clsx";
import { secondaryFont } from "@utilities/font";
import Navbar from "@molecules/Navbar";
import LogoContainer from "@features/LogoContainer";

export default function GrievanceData() { 
    return (
        <div className={styles.page}>
        <LogoContainer/>
        <Navbar className={styles.nav} />
        <div className={clsx(styles.container,secondaryFont.className)}>
                <div className={styles.title}>Grievance Data</div>
                <div className={styles.para}>Data for the month ending - <strong>November 2024</strong></div>
                <div className={styles.tableContainer}>
                    <table className={styles.dataTable}>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Received from</th>
                                <th>Pending at the end of last month</th>
                                <th>Received</th>
                                <th>Resolved*</th>
                                <th>Total Pending#</th>
                                <th>Pending complaints &gt; 3 months</th>
                                <th>Average Resolution time^ (in days)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Directly from Investors</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>SEBI (SCORES)</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Other Sources (if any)</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Grand Total</td>
                                <td></td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Trend of monthly disposal of complaints</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.dataTable}>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Month</th>
                                <th>Carried forward from previous month</th>
                                <th>Received</th>
                                <th>Resolved*</th>
                                <th>Pending#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>November, 2024</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>October, 2024</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>September, 2024</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>August, 2024</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>July, 2024</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Grand Total</td>
                                <td></td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Trend of annual disposal of complaints</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.dataTable}>
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Year</th>
                                <th>Carried forward from previous month</th>
                                <th>Received</th>
                                <th>Resolved*</th>
                                <th>Pending#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2023-24</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Grand Total</td>
                                <td></td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>You can submit your grievance/complaints at <a href="mailto:support@curie.money">support@curie.money</a></p>
            </div>
        </div>
    );
}

