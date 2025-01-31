import React from 'react'
import { formatter } from '../../util/investment';

function ResultTableRow({resultInvestmentParameters}) {
    
    return (
        <tr>
            <td>{resultInvestmentParameters.year}</td>
            <td>{formatter.format(resultInvestmentParameters.valueEndOfYear)}</td>
            <td>{formatter.format(resultInvestmentParameters.interest)}</td>
            <td>{formatter.format(resultInvestmentParameters.totalInterest)}</td>
            <td>{formatter.format(resultInvestmentParameters.investedCapital)}</td>
        </tr>
    )
}

export default ResultTableRow