import Header from "./Header/Header"
import ResultTable from "./ResultTable/ResultTable";
import SectionInputs from "./SectionInputs/SectionInputs"
import { useState } from 'react';


const initialInvestmentParameters = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}


function App() {
  const [investmentParameters, setInvestmentParameters] = useState(initialInvestmentParameters)

  function changeInvestmentParameters(newInvestmentParameters) {
    
    setInvestmentParameters(newInvestmentParameters)
  }

  return (
    <div className="app">
      <Header/>
      <SectionInputs
        investmentParameters={investmentParameters}
        changeInvestmentParameters={changeInvestmentParameters} 
      />
      
      <ResultTable investmentParameters={investmentParameters}/>
    </div>
  )
}

export default App
