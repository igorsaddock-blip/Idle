"use client";

import React, {useState} from "react";

export default function Contador(){
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1)
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Valor atual: {contador}</h2>
      
      <button 
        onClick={aumentarContador} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Aumentar +1
      </button>
    </div>
  );
}