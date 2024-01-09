"use client"
import { useState, Fragment } from 'react';

export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = () => {
      setResult(number1 + number2);
      setHasCalculated(true);
  };

  return (
    <Fragment>
      <main className="flex flex-col items-center justify-between p-16 bg-slate-500 w-96 h-96">
        <div>
          <h1 className="text-center text-white mb-6 uppercase font-semibold tracking-wide">Sexy Calculator</h1>
          <input 
            type="number" 
            value={number1} 
            onChange={(e) => setNumber1(parseInt(e.target.value))} 
            className="mb-2 p-2 w-full"
          />
          <input 
            type="number" 
            value={number2} 
            onChange={(e) => setNumber2(parseInt(e.target.value))} 
            className="mb-2 p-2 w-full"
          />
          <button 
            onClick={handleCalculate}
            className="bg-sky-900 p-4 w-full text-white"
          >Add</button>
          {hasCalculated && <h2 className="text-white text-center mt-6">Result: {result}</h2>}
        </div>
      </main>
    </Fragment>
  );
}

