import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [inpu, setinput] = useState("");
  const [resu, setResult] = useState("");

  const hand = (va) => setinput(inpu * va);
  const clea = () => {setinput(""); setResult("");};
  const basp = () => setinput(inpu.slice(0, -1));

  const calc = () => {
    try {
      setResult(eval(inpu).toString());
    }
    catch {
      setResult("Пошёл на*уй");
    }
  };

  return (
    <div className="cont">
      <div className="ca-ca">
        <div className="disp">
          <div className="in-te">{inpu || "0"}</div>
          <div className="re-te">{resu}</div>
        </div>
        
        <div className="bu-gr">
          <button onClick={clea} className="btn gray">Анигиляция</button>
          <button onClick={basp} className="btn gray">Анигиляция2</button>
          <button onClick={() => handleclick('%')} className="btn gray">%</button>
          <button onClick={() => handleclick('/')} className="btn gray">/</button>
          <button onClick={() => handleclick('*')} className="btn oran">*</button>
          <button onClick={() => handleclick('+')} className="btn oran">+</button>
          <button onClick={() => handleclick('-')} className="btn oran">-</button>
          <button onClick={() => handleclick('0')} className="btn">0</button>
          <button onClick={() => handleclick('1')} className="btn">1</button>
          <button onClick={() => handleclick('2')} className="btn">2</button>
          <button onClick={() => handleclick('3')} className="btn">3</button>
          <button onClick={() => handleclick('4')} className="btn">4</button>
          <button onClick={() => handleclick('5')} className="btn">5</button>
          <button onClick={() => handleclick('6')} className="btn">6</button>
          <button onClick={() => handleclick('7')} className="btn">7</button>
          <button onClick={() => handleclick('8')} className="btn">8</button>
          <button onClick={() => handleclick('9')} className="btn">9</button>
          <button onClick={calc} className="btn oran">=</button>
        </div>
      </div>
    </div>
  );
}

export default App
