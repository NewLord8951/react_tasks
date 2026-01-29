import React, { useState } from 'react';
import './App.css';

function main() {
  const [count, setCount] = useState(0);

  const dicrement = () => {
    setCount(prev => prev - 1);
    if (count < 0){
      alert("Сорри препод пёрнул");
    }
  };

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const del = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px'}}>
      <h2>Счётчик: {count}</h2>
      <button onClick={increment} style={{ marginRight: '10px'}}> Добавка </button>
      <button onClick={dicrement} style={{ marginRight: '10px'}}> Скомуннизнилка </button>
      <button onClick={del} style={{ marginRight: '10px'}}> DELITE </button>
    </div>
  )
}

export default main;
