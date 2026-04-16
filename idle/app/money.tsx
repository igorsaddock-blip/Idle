"use client";

import React, {useState} from "react";

interface MoneyProps {
  dinheiroAtual: number;
  setDinheiro: React.Dispatch<React.SetStateAction<number>>;
  poderDoClique: number;
}

export function Money({dinheiroAtual, setDinheiro, poderDoClique}:MoneyProps) {

  const aumentarContador = () => {
    setDinheiro(dinheiroAtual + poderDoClique);
  };
  return(
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <h2>Money: {dinheiroAtual}</h2>
        
        <button 
        onClick={aumentarContador} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
        Work
        </button>
        </div>
    );

}