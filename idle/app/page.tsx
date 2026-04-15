"use client";

import React, {useState} from "react";

type tipoDeUpgrade = 'upgrade1' | 'upgrade2' | 'upgrade3';

export default function Contador(){
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1)
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Money: {contador}</h2>
      
      <button 
        onClick={aumentarContador} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Work
      </button>
      <Upgrades />
    </div>
  );
}
export function Upgrades(){
  const [upgrade, setUpgrade] = useState({
    upgrade1: 0,
    upgrade2: 0,
    upgrade3: 0
  });

  const comprarUpgrade = (nomeDoUpgrade: tipoDeUpgrade) =>{
    setUpgrade((estadoAtual) => {
      return{
        ...estadoAtual,
        [nomeDoUpgrade]: estadoAtual[nomeDoUpgrade] + 1
      }
    }
  )}
return (
    <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '400px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center' }}>Loja de Upgrades</h3>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span>Upgrade 1 (Lvl {upgrade.upgrade1})</span>
        <button onClick={() => comprarUpgrade('upgrade1')}>Comprar</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span>Upgrade 2 (Lvl {upgrade.upgrade2})</span>
        <button onClick={() => comprarUpgrade('upgrade2')}>Comprar</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Upgrade 3 (Lvl {upgrade.upgrade3})</span>
        <button onClick={() => comprarUpgrade('upgrade3')}>Comprar</button>
      </div>
    </div>
  );
}