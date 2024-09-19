import React from 'react';

const GrievanceData = () => {
    return (
        <div>
            <h1>Grievance Data</h1>
            <h2>Data for the month ending - <strong>July 2024</strong></h2>
            <table>
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
                        <td>SEBI (SCORE S)</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
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
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h2>Trend of monthly disposal of complaints</h2>
            <table>
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
                        <td>September, 2023</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    {/* Add other months similarly */}
                    <tr>
                        <td>11</td>
                        <td>July, 2024</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Grand Total</td>
                        <td></td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h2>Trend of annual disposal of complaints</h2>
            <table>
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
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Grand Total</td>
                        <td></td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <p>You can submit your grievance/complaints at <a href="mailto:support@curie.money">support@curie.money</a></p>
        </div>
    );
};

export default GrievanceData;
