import React from 'react'
import {calculateInvestmentResults} from '../util/investment.js'
import ResultTableRow from './ResultTableRow/ResultTableRow.jsx';

function ResultTable({ investmentParameters }) {

    const investmentResults = calculateInvestmentResults(investmentParameters);
    
    return (
        <div>
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment value</th>
                        <th>Interest (Year)</th>
                        <th>Total interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {investmentResults.map((result, index) => (
                        <ResultTableRow key={index} resultInvestmentParameters={result}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable