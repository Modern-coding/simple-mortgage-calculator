import { useState } from "react";

import "./App.css";

function App() {
  const [principale, setPrincipale] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEMI] = useState(0);
  function handleChange(e) {
    let id = e.target.id;
    let value = e.target.value;

    if (id === "principale") setPrincipale(value);
    if (id === "interest") setInterest(value);
    if (id === "years") setYears(value);
    console.log(principale, interest, years);
    if (principale && interest && years) {
      let r = interest;
      r = r / 12 / 100; // per month
      console.log(r);
      const calcPow = Math.pow(1 + r, years * 12);
      const amount = principale * ((r * calcPow) / (calcPow - 1));
      setEMI(Math.round(amount));
    }
  }

  return (
    <>
      <div className="loan-calc">
        <h1>Mortgage Caclulator</h1>
        <div className="inputs">
          <label htmlFor="principale">Principale:</label>
          <br />

          <input onChange={handleChange} type="number" id="principale" />
          <br />

          <label htmlFor="interest">Interest:</label>
          <br />

          <input onChange={handleChange} type="number" id="interest" />

          <br />
          <label htmlFor="years">Years:</label>
          <br />

          <input onChange={handleChange} type="number" id="years" />

          <br />
        </div>
        <div className="output">
          Your EMI is <b>${emi}</b>
          <div>
            Your principale amout is: <b>{principale}</b>
          </div>
          <div>
            Your interest rate is: <b>{interest}</b>
          </div>
          <div>
            your selectd years: <b>{years}</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
