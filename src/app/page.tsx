import { Fragment, useState } from "react";


export default function Calculator() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
      setResult(number1 + number2);
  };

  return (
    <Fragment>
    <main className="flex flex-col items-center justify-between p-24 bg-red-500 w-96 h-96">
    <div>
            <h1>Simple Calculator</h1>
            <input 
                type="number" 
                value={number1} 
                onChange={(e) => setNumber1(+e.target.value)} 
            />
            <input 
                type="number" 
                value={number2} 
                onChange={(e) => setNumber2(+e.target.value)} 
            />
            <button onClick={handleCalculate}>Add</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    </main>
    </Fragment>
  )
}


