import React from 'react'

function SectionInputs({ investmentParameters, changeInvestmentParameters }) {

    const changeParameter = (parameter, value) => {
        let investmentParametersAux = {...investmentParameters};
        investmentParametersAux[parameter] = parseInt(value);
        console.log(investmentParametersAux);
        
        changeInvestmentParameters(investmentParametersAux);
    }

  return (
    <div id="user-input">
        <div className="input-group">
            <label htmlFor="initialInvestment">INITIAL INVESTMENT ($)</label>
            <input type="number" id="initialInvestment" required
            placeholder="0"
            value={investmentParameters.initialInvestment}
            onChange={e => changeParameter(e.target.id, e.target.value)}
            />
        </div>
        <div className="input-group">
            <label htmlFor="annualInvestment">ANNUAL INVESTMENT ($)</label>
            <input type="number" id="annualInvestment" required 
            placeholder="0"
            value={investmentParameters.annualInvestment} 
            onChange={e => changeParameter(e.target.id, e.target.value)}
            />
        </div>
        <div className="input-group">
            <label htmlFor="expectedReturn">EXPECTED RETURN (%)</label>
            <input type="number" id="expectedReturn" required
            placeholder="0"
            value={investmentParameters.expectedReturn} 
            onChange={e => changeParameter(e.target.id, e.target.value)}
            />
        </div>
        <div className="input-group">
            <label htmlFor="duration">DURATION (in years)</label>
            <input type="number" id="duration" required
            placeholder="0"
            value={investmentParameters.duration} 
            onChange={e => changeParameter(e.target.id, e.target.value)}
            />
        </div>
    </div>
  )
}

export default SectionInputs